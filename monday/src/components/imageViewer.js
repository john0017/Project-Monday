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
import { uploadImgList, spinner, assetTaskImageList } from '../App';
import axios from 'axios';
import Spinner from './spinner';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageViewer() {
    const [imageWin, setImageWin] = useRecoilState(imageWindow)
    const [camState, setCamState] = React.useState(false)
    const [image, setImage] = useRecoilState(uploadImgList)
    const [spin, setSpin] = useRecoilState(spinner);
    const [assetMedia, setAssetMedia] = useRecoilState(assetTaskImageList)

    React.useEffect(()=>{

        axios.get(`https://protoxsys.eu.pythonanywhere.com/images/${image.asset_id}/${image.task_id}`).then(resp=>{
            console.log(resp.data)
            setAssetMedia(resp.data)
        }).catch((err)=>{
            console.log(err)
        });
      
      },[imageWin])

    const handleClose = () => {
        setImageWin({
            open:false,
            id:'',
            name:'',
            image_list:[]
          });

        setImage(prevState => ({...prevState, image_list:[]}))

        setCamState(false)
    };

    const handleOpenCam = ()=>{
        setCamState(true)
    }

    const uploadImages = ()=>{

        setSpin(true)

        let data = image

        const headers={
            'Content-Type':'application/json',
          }
          axios.post('https://protoxsys.eu.pythonanywhere.com/uploadImages', data, {
            headers: headers
          }).then(resp=>{
              console.log(resp.data)

            if(resp.data=='success'){
                setCamState(false);
                setImage(prevState => ({...prevState, image_list:[]}))
                setSpin(false)
            }
            else{
                // console.log('error')
                setSpin(false)
            }

          }).catch((err)=>{
              console.log(err)
          });

          
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
            <Spinner msg={'Uploading...'}/>

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
