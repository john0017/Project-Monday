import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './webCam.css'
import axios from 'axios';
import { Box } from '@mui/system';
import { AppBar } from '@mui/material';
import App from '../App';


function Cam (props) {
        const [img, setImg] = React.useState('')

  function handleTakePhoto (dataUri) {
    setImg(dataUri)
    // console.log(dataUri);
  }

  const uploadImages = ()=>{

            let data = {image_list: [img]}
    
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
    <Box>
    {/* //   <Box
    //     border={1}
    //   >
    //     test
    //   </Box> */}
    <AppBar color='transparent' elevation={1}>
    test
    </AppBar>
      <Camera
          imageType='jpg'
          isFullscreen={true}
          sizeFactor={1}
          isMaxResolution={true}
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      />
      
    </Box>
  );
}

export default Cam;