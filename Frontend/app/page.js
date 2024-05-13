"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { FileTable } from "@/components/ui/Files/FileTable";
import { columns } from "@/components/ui/Files/columns";
import { Card } from "@/components/ui/card";


export default function Home() {
  
const [files,setFiles]=useState([])
useEffect(()=>{
  axios.get("http://ravi.tail865cd.ts.net:5000/file-list").then((res)=>{
    setFiles(res.data.map((res)=>{
      return({"file_name":((res.split("."))[0]),"file_name_with_extention":res})
    }))

    
  })

},[])

  return (
<div className="w-full h-screen items-center justify-center p-10 space-y-3">
  <div className="text-4xl"> File Download Page</div>
  <Card className = "p-5">

<FileTable columns={columns(["file-name"])} data={files} />
  </Card>
</div>
  );
}
