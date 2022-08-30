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
import { uploadImgList } from '../App';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageViewer() {
    const [imageWin, setImageWin] = useRecoilState(imageWindow)
    const [camState, setCamState] = React.useState(false)
    const [image, setImage] = useRecoilState(uploadImgList)

    const handleClose = () => {
        setImageWin({
            asset_id:'',
            task_id:'',
            mode:'after',
            image_list:[]
          });
        setCamState(false)
    };

    const handleOpenCam = ()=>{
        setCamState(true)
    }

    const uploadImages = ()=>{

        let data = image

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

          setCamState(false);
          setImage({
            asset_id:'',
            task_id:'',
            mode:'after',
            image_list:[]
          })
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

                <IconButton
                edge='end'
                color="inherit"
                //   onClick={handleClose}
                aria-label="close"
                sx={{
                    marginLeft:'auto',
                    display:(image.image_list.length>0? null: 'none')

                }}
                onClick={uploadImages}
                >
                <Typography fontWeight={700}>Save</Typography>
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
