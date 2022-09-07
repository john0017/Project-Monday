import React from 'react';
import Webcam from "react-webcam";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './webCam.css'
import { uploadImgList } from '../App';
import { useRecoilState } from 'recoil';

const videoConstraints = {
    width: { min: 1280 },
    height: { min: 720 },
    // aspectRatio: 0.5,
    facingMode: "user",
    // facingMode: { exact: "environment" }
  };
  
const WebcamComp = () => {

    const webcamRef = React.useRef(null);
    const bottomAppBar = React.useRef()
    const [image, setImage] = useRecoilState(uploadImgList)


    const capture =() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(image.image_list)
        setImage(prevState => ({...prevState, image_list:[...prevState.image_list, imageSrc]}))
    }
        

    return (
        <>
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems: 'flex-start',
                marginTop:'60px'
            }}
        >
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                forceScreenshotSourceSize={true}
                // width={200} 
                // height={720}
                videoConstraints={videoConstraints}
            />
            
                <Box
                    sx={{
                        maxHeight:'65px',
                        maxWidth:'100%',
                        textAlign:'left',
                        marginTop:'35px',
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'flex-start',
                        overflowX:'scroll',
                        overflowY:'hidden'
                    }}
                >
                    {
                        image.image_list.length ? image.image_list.map((img) =>{
                            return <Box><img key={img} src={img} height='55px' width='55px' alt=''/></Box>
                            }
                            
                        ): null
                    }

                </Box>
                
        </Box>

        <AppBar ref={bottomAppBar} position="fixed" color="" sx={{ top: 'auto', bottom: 0, padding:0 }}>
            <Toolbar
                sx={{
                    display:'flex',
                    flexDirection:'row',
                }}
            >

                {/* cam capture */}
                <Button variant="filled"
                    
                    sx={{
                        width:'100%',
                        height:'100%',
                        color:'red',
                        // display: (props.state? '': 'none')
                    }}
                    onClick={capture}
                >
                Capture
                </Button>

            </Toolbar>
        </AppBar>
        </>
    );
};

export default WebcamComp;