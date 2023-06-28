import mongoose from "mongoose"

const FeedbackSchema = new mongoose.Schema(
  {
    feedback: { type: String, required: true },
    rating: { type: Number, required: true },
    userName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema)
