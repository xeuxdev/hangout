import mongoose from "mongoose"

const ImagesSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    images: { type: Array, default: [] },
    profileImage: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Images || mongoose.model("Images", ImagesSchema)
