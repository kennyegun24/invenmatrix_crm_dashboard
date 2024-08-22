const { Schema, default: mongoose } = require("mongoose");

const organizationSchema = new Schema(
  {
    name: { type: String, required: true },
    admin: { type: Schema.Types.ObjectId, ref: "User", required: true },
    users: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        role: {
          type: String,
          enum: ["admin", "invited", "invited_admin"],
          required: true,
        },
      },
    ],
    api_keys: [
      {
        api_key: { type: String, required: true },
        platform_name: { type: String, required: true },
        access_token: { type: String, required: true },
      },
    ],
    no_of_items: { type: Number, default: 0, required: true },
    no_of_folders: { type: Number, default: 0, required: true },
  },
  { timestamps: true }
);

const Organization =
  mongoose.models.Organizations ||
  mongoose.model("Organization", organizationSchema);

export default Organization;
