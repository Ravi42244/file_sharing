import express from 'express'
import multer from 'multer';
import fs from 'fs'
import  cors from 'cors'
import mongoose from 'mongoose'; 
import 'dotenv/config'
import bcrypt from "bcrypt"

const app = express()
const port = process.env.PORT
app.use(cors()); 




mongoose.connect(process.env.MONGODB_URL)


const upload = multer({dest:"uploads"})



app.get('/download/:file', (req, res) => {
  // console.log(req.params.file)
  // res.download(`D:/RAVI/Youtube/For Dusty/${req.params.file}`)
  // res.download(`D:/RAVI/Youtube/For Dusty${req.params.file}`)

  const filePath = `D:/RAVI/Youtube/For Dusty/${req.params.file}`;
  
  // Set headers
  res.setHeader('Content-Disposition', `attachment; filename="${req.params.file}"`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Stream the file to the response
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

app.get('/file-list', (req, res) => {

  res.json(fs.readdirSync("D:/RAVI/Youtube/For Dusty"))
})

app.post("/upload", upload.single("file") ,async(req,res)=>{
  

  const fileData={
    path: req.file.path,
    originalName: req.file.originalname,
    
  }
  if(req.body.password != null && req.body.password != ""){
fileData.password =await bcrypt.hash(req.body.password,10)
  }
  const file = await File.create(fileData)
  console.log(file)
res.send(file.originalName)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
