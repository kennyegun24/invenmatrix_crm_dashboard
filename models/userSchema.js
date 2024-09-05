const { Schema, default: mongoose } = require("mongoose");

const users = new Schema(
  {
    user_name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      minLength: 10,
      required: true,
      lowercase: true,
      unique: true,
    },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    profile_picture: {
      type: String,
      default:
        "https://res.cloudinary.com/drfqge33t/image/upload/v1684591863/noImage_ynt833.png",
    },
    phone_number: { type: String, minLength: 10, maxLength: 15 },
    address: { type: String },
    last_login: { type: Date, default: null },
    status: {
      type: String,
      enum: ["active", "suspended", "inactive"],
      default: "active",
    },
    reset_token: { type: String, required: false },
    email_confirm: { type: Date, default: null, required: false },
    email_confirm_code: { type: String, required: false },
    email_confirm_expire: {
      type: Date,
      required: true,
    },
    reset_expiry: { type: Date, required: false },
    organizations: [
      {
        organization: { type: Schema.Types.ObjectId, ref: "Organization" },
        role: {
          type: String,
          enum: ["admin", "invited", "invited_admin"],
          required: true,
        },
      },
    ],
    subscription_plan: {
      type: String,
      default: "free",
      enum: ["free", "basic", "pro", "gold"],
    },
    custom_fields: [{ type: Schema.Types.Mixed }],
  },
  { timestamps: true }
);
users.index({ email_confirm_code: 1 });
const userSchema = mongoose.models.User || mongoose.model("User", users);

export default userSchema;
