import React from 'react';
import Webcam from "react-webcam";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './webCam.css'


const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 1,
    facingMode: "user"
  };
  
const WebcamComp = () => {

    const webcamRef = React.useRef(null);
    const bottomAppBar = React.useRef()
    const [image, setImage] = React.useState('')


    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        },
        [webcamRef]
    );
    return (
        <>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            // width={200} 
            // height={720}
            videoConstraints={videoConstraints}
        />
        
        <Box
            border={1}
            sx={{
                maxHeight:
            }}
        >

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