import redis from "redis";
import { promisify } from "util";
import Organization from "@/models/organizationSchema";

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

export const checkUserRoleInOrganization = async (organizationId, userId) => {
  const cacheKey = `org:${organizationId}:user:${userId}:role`;

  // Check the cache first
  const cachedRole = await getAsync(cacheKey);
  if (cachedRole) {
    return JSON.parse(cachedRole); // Return cached role
  }

  // If not in cache, perform the database query
  const organization = await Organization.findOne({
    _id: organizationId,
    users: {
      $elemMatch: {
        user: userId,
        role: { $in: ["admin", "invited_admin"] },
      },
    },
  });

  if (!organization) {
    return null; // User is not an admin or invited_admin
  }

  // Cache the result with a TTL of 3600s or 1HR
  await setAsync(cacheKey, JSON.stringify(organization), "EX", 3600);

  return organization;
};
