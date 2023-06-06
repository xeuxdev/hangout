import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    userName: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String, default: "" },
    phone: { type: String, default: "" },
    occupation: { type: String, default: "" },
    gender: { type: String, enum: ["male", "female"] },
    birthday: { type: String, default: "" },
    country: { type: String, default: "" },
    interests: { type: Array, default: [] },
    preferences: {
      type: Array,
      default: [""],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Users || mongoose.model("Users", UsersSchema)
