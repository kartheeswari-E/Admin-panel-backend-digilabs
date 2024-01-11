import mongoose from "mongoose";
const ImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    buttontext: {
        type: String,
      },
  },
  {
    timestamps: true,
   
  }
);

const Logo = mongoose.model("LOGO", ImageSchema);

export default Logo;