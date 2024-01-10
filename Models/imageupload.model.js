import mongoose from "mongoose";
const ImageSchema = new mongoose.Schema(
  {
    image: {
      type: Object,
    },
    
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("IMAGES", ImageSchema);

export default Image;