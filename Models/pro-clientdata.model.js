import mongoose from "mongoose";
const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
        type: String,
      },
      number: {
        type: String,
      },
  },
  {
    timestamps: true,
  }
);

const Clientdata = mongoose.model("Client", ClientSchema);

export default Clientdata;