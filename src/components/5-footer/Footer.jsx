import React, { useState } from 'react'
import './footer.css'
import axios from "axios"
export default function Footer() {


  const [file, setFile] = useState(null);


  // dlmfka96z
  // https://upload-request.cloudinary.com/dlmfka96z/c2e90bd807a6d899635bff7518845746
  // cloud_portFolio	

  const uploadImage = async() => {
    const form = new FormData();
    form.append("file",file);
    form.append("upload_preset","cloud_portFolio")
    await axios.post("https://upload-request.cloudinary.com/dlmfka96z/c2e90bd807a6d899635bff7518845746",
      form
    ) ;
  }
  
  return (<div>


    <footer className='flex'>
      <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
      </ul>
      <p>© 2024 Mortada. Tous droits réservés.</p>




    </footer>

    <div>


    </div>
    <input 
    type="file" 
    
    onChange={(e) => setFile(e.target.files[0])
    } />

    <br />
    <button className='border' onClick={uploadImage}>Upload !!</button>
  </div>
  )
}
