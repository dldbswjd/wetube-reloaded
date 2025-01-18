import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, minLength: 80 },
  description: { type: String, required: true, maxLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtag: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const movieModel = mongoose.model("Video", videoSchema);
export default movieModel;
