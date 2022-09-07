import React from 'react';
import axios from 'axios';





const TestCam = () => {
    const [img, setImg] = React.useState('')
    const cam = React.useRef()

    const handleCam=(e)=>{
        // setImg(cam.current.files[0])
        console.log(e.target.files)
        let blob_url = window.URL.createObjectURL(e.target.files[0]);
        console.log(e.target.result)
            const reader = new FileReader();
            reader.addEventListener('load', (e) => {
                console.log(e.target.result)
            });
        setImg(e.target.files[0])

    }

    const uploadImages = ()=>{

        let data = {image_list: [btoa(img)]}

        const headers={
            'Content-Type':'application/json',
          }
          axios.post('https://protoxsys.eu.pythonanywhere.com/uploadImages', data, {
            headers: headers
          }).then(resp=>{
              console.log(resp.data)

          }).catch((err)=>{
              console.log(err)
          });
        }

    React.useEffect(()=>{
        
        uploadImages()
    },[img])

    return (
        
        <div>
            <input 
                type="file" 
                accept="image/*,video/*" 
                capture 
                onChange={handleCam}
            />
            <img src={img} />
            {btoa(img)}
        </div>
    );
};

export default TestCam;

