/**
 * API endpoints responsible for authentication purposes
 * These should always be open for public auth
 */
export const authApiPrefixes = ["/api/user", "/api/auth", "/api"];

/**
 * Authentication routes for user authentication.
 * These should always be open
 */
export const authRoutes = ["/login", "/register", "/forget_password"];

/**
 * DEFAULT REDIRECT AFTER SUCCESSFUL LOGIN OR SIGNUP
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

/**
 * PUBLIC ROUTES
 */

export const publicRoutes = ["/verify_email"];
