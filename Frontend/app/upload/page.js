import React from 'react'



const submitHandle = ()=>{

}

const UploadPage = () => {
 

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-neutral-100'>
        <form action='http://ravi.tail865cd.ts.net:5000/upload' method='post'  className=' flex flex-col space-y-5 w-[500px] bg-white shadow-md h-[500px] p-5 justify-center rounded-md' encType="multipart/form-data">
            <div className=' w-full  flex items-center justify-between' >

<div for="file" className='p-2 w-full font-bold'>File:</div>
<input type="file" id="file" name="file" required className='shadow-md p-1 rounded-md w-full'/>
            </div>
            <div className=' w-full  flex items-center justify-between'>

<div for="password" className='p-2 w-full font-bold'>Password:</div>
<input type="password" id="password" name="password"  className='shadow-md p-1 border rounded-md w-full'/>
            </div>
<button type="submit" className='text-3xl bg-emerald-200 h-[50px] text-emerald-600 font-semibold rounded-md'>Share</button>

        </form>
        
    </div>
  )
}

export default UploadPage