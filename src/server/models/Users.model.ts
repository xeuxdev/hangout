import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: "" },
    nickname: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "" },
    phone: { type: String, default: "" },
    occupation: { type: String, default: "" },
    gender: { type: String, enum: ["male", "female"] },
    birthday: { type: String, default: "" },
    country: { type: String, default: "" },
    interests: { type: Array, default: [] },
    idealMatch: {
      type: String,
      enum: ["love", "friends", "fling", "business"],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Users || mongoose.model("Users", UsersSchema)
