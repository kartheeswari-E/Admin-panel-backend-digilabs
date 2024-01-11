import express from "express";
const router = express.Router();
import Logo from "../Models/imageupload.model.js";
import multer from "multer";
import fs from "fs";

import mongodb from "mongodb"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const path ="uploads";
  
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
      }
      return cb(null, path);
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
   
     const path = "uploads"
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


  router.put('/newlogo/:id', async (req, res) => {
    const {base64} = req.body;
   console.log(req.params.id);
    try {
  
        let data = await Logo.findByIdAndUpdate({_id: req.params.id},
            { $set: { image: base64 } }
        );
        res.status(200).send({
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
  });

  router.put('/buttontext/:id', async (req, res) => {
    const {buttontext} = req.body;
    console.log(buttontext);
    try {
  
        let data = await Logo.findByIdAndUpdate({_id: req.params.id},
            { $set: { buttontext: buttontext } }
        );
        res.status(200).send({
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
  });

  router.get("/webdata", async (req, res) => {
    try {
        await Logo.find({}).then((data) => {
            res.status(200).send(data);
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({ message: "Internal Server Error", error });
        }
});











  export default router;