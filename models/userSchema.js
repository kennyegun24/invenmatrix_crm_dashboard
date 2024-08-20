const { Schema, default: mongoose } = require("mongoose");

const users = new Schema(
  {
    email: {
      type: String,
      minLength: 10,
      required: true,
      lowercase: true,
    },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    is_admin: { type: Boolean, required: true, default: false },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const userSchema = mongoose.models.Users || mongoose.model("Users", users);

export default userSchema;
