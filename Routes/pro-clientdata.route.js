const router = express.Router();
import Client from "../Models/pro-clientdata.model.js";

import express from "express";

router.post("/add", async (req, res) => {
  try {
    let data = await new Client({ ...req.body }).save();
    res.status(201).send({data:data, message: "data has been added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      data: error,
    });
  }
});

router.get("/alldata", async (req, res) => {
  try {
   Client.find().then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
});



router.delete("/delete/:clientID",async(req,res)=>{
  try{
await Client.deleteOne({_id:req.params.clientID});

  res.status(200).send({message:`deleted id ${req.params.clientID} successfully`})
  }
  catch(error){
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });  
  }
})
export default router;