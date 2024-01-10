import express from "express";
const router = express.Router();
import Image from "../Models/imageupload.model.js";
import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const path = `https://lastapp-ih15.onrender.com/uploads`;
  
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
      }
      cb(null, path);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });


  router.post("/create", upload.single("image"), async (req, res) => {
    const imagedata = req.body;
  
    imagedata.image = req.file;

  try {
   
     const path = `https://lastapp-ih15.onrender.com/uploads`;
      console.log(path);
      let upload = await new Image({ ...imagedata, destination: path }).save();
      res.status(201).send({ message: "image upload successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });


  router.get("/getimage", async (req, res) => {
    try {
      Image.find().then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error", error });
    }
  });
  export default router;