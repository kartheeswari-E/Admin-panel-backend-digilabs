import mongoose from "mongoose";
const db = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URL}`
    );
    console.log("Db connection established.");
  } catch (error) {
    console.log("DB Error: ", error);
  }
};
export default db;