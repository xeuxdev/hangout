import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    nickname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    phone: { type: String },
    occupation: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    birthday: { type: String },
    country: { type: String },
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
