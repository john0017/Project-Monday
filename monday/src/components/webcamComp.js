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
    // facingMode: "user",
    facingMode: { exact: "environment" }
  };
  
const WebcamComp = () => {

    const webcamRef = React.useRef(null);
    const bottomAppBar = React.useRef()
    const [image, setImage] = React.useState([])


     
    const capture =() => {
        const imageSrc = webcamRef.current.getScreenshot();
        // console.log(image)
        setImage(prevState => [...prevState, imageSrc])
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
                // width={200} 
                // height={720}
                videoConstraints={videoConstraints}
            />
            
                <Box
                    sx={{
                        maxHeight:'65px',
                        maxWidth:'100%',
                        textAlign:'left',
                        marginTop:'2px',
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'flex-start',
                        overflowX:'scroll',
                        overflowY:'hidden'
                    }}
                >
                    {
                        image.length ? image.map((img) =>{
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