import axios from "axios"
import { useState } from "react"
import { CiDark } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md"

const Profile = () => {

    const [Image, setImage] = useState(null)
  const [Url, setUrl] = useState("")


  const handleImageUpload = async ()=>{
    try {

      if(!Image){
        return alert("please Select any image")
      }

      const ImageData = new FormData();
      ImageData.append('file',Image);
      ImageData.append("upload_preset", "MyImage");
      ImageData.append("cloud_name" , "dmlou4zwt");

    const {data} = await  axios.post("https://api.cloudinary.com/v1_1/dmlou4zwt/image/upload",ImageData)
    console.log(data);
    setUrl(data.secure_url)
      
    } catch (error) {
      console.log(error);
      
    }
  }


  const [isDark, setDark] = useState(false);
  const toggoleTheme =()=>{
    setDark(!isDark)
  }
  return (
     <>
     <button onClick={toggoleTheme}>{isDark ? (<CiDark className='text-3xl'/>):(<MdDarkMode className='text-3xl'/>)}</button>
    <div className={isDark ? "dark" : ""}>
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Upload Image to Cloudinary</h2>

      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative h-48 rounded-lg border-2 border-blue-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="absolute flex flex-col items-center">
                <img
                  alt="File Icon"
                  className="mb-3"
                  src={Url}
                />
                <span className="block text-gray-500 font-semibold">Drag &amp; drop your files here</span>
                <span className="block text-gray-400 font-normal mt-1">or click to upload</span>
              </div>
              <input
                type="file"
                onChange={(e)=>(setImage(e.target.files[0]))}
                className="h-full w-full opacity-0 cursor-pointer"
              
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          
          className="border-2 rounded-sm hover:bg-blue-500 hover:text-white cursor-pointer border-blue-500 py-2 px-6 font-bold"
          onClick={handleImageUpload}
        >
          Upload
        </button>
      </div>

   
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Uploaded Image:</h3>
            <img src="" alt="Uploaded" className="rounded shadow-md w-64" />
          </div>
        </div>
  
    </div>
    </div>
    </>
  )
}

export default Profile