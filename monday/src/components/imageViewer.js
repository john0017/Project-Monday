import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { imageWindow } from '../App';
import { useRecoilState } from 'recoil';
import ImageGridView from './imageList';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import WebcamComp from './webcamComp';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageViewer() {
    const [imageWin, setImageWin] = useRecoilState(imageWindow)
    const [camState, setCamState] = React.useState(false)

    const handleClose = () => {
        setImageWin({
            open:false,
            id:'',
            name:'',
            image_list:[]
        });
        setCamState(false)
    };

    const handleOpenCam = ()=>{
        setCamState(true)
    }

    return (
        <div>
        <Dialog
            fullScreen
            open={imageWin.open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: !camState?'sticky':'fixed' }}>
            <Toolbar>
                <IconButton
                edge='start'
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                <CloseIcon />
                </IconButton>

                <IconButton
                edge='end'
                color="inherit"
                //   onClick={handleClose}
                aria-label="close"
                sx={{
                    marginLeft:'auto',
                    display:(camState? 'none': null)

                }}
                onClick={handleOpenCam}
                >
                <PhotoCamera />
                </IconButton>
                {/* <Typography noWrap fontWeight={700}>
                    
                </Typography> */}
            </Toolbar>
            </AppBar>

            { camState? <WebcamComp /> : <ImageGridView /> }
            
            <AppBar position="fixed" color="" sx={{ top: 'auto', bottom: 0, padding:0, display:(camState? 'none': null) }}>
                <Toolbar
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                    }}
                >
                    <Button variant="text"
                        sx={{
                            width:'100%',
                            height:'100%',
                            color:'green',
                        }}
                    >
                    Before
                    </Button>
                    
                    <Divider orientation="vertical" flexItem ></Divider>

                    <Button variant="text"
                        
                        sx={{
                            width:'100%',
                            height:'100%',
                            color:'black',
                        }}
                    >
                    After
                    </Button>
                </Toolbar>
            </AppBar>
        </Dialog>
        </div>
    );
}
