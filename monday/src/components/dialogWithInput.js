import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { inputDialog, alerts, assets } from '../App';
import { useRecoilState } from 'recoil';
import axios from 'axios';


export default function InputDialog() {

  const [inputDialog_, setInputDialog] = useRecoilState(inputDialog)
  const [textIn, setTextIn] = React.useState('')
  const [validate, setValidate] = React.useState(false)
  const [alert, setAlerts] = useRecoilState(alerts)
  const [_assets, setAssets] = useRecoilState(assets)


    const addAsset=(name)=>{
        axios.get(`https://protoxsys.eu.pythonanywhere.com/addAsset/${name}`).then(resp=>{
            
            if(resp.data=='success'){
                console.log(resp.data)
                setAlerts({
                    open:true,
                    type:'success',
                    color:'success',
                    message:"Asset added successfully! "
                })
                updateAssetList(name)
            }
            else{
                setAlerts({
                    open:true,
                    type:'error',
                    color:'error',
                    message:"Error: Try again! "
                })
            }
            
        }).catch((err)=>{
            console.log(err)
        });
    }

    const updateAssetList=(name)=>{
        setAssets(prev=>([{name:name, task_list:null}, ...prev ]))
    }


  const handleSubmit = () => {
    if(textIn==""){
        setValidate(true)
    }
    else{
        setValidate(false)
        setInputDialog(prev =>({...prev, respose:textIn}))
        handleClose()
        addAsset(textIn)
    }
    
  };

  const handleClose = () => {
    setInputDialog(false);
  };

  const handleTextInput=(e)=>{
    if(textIn!=""){
        setValidate(false)
    }
    setTextIn(e.target.value)
  }


  return (
    <div>
      <Dialog open={inputDialog_.open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            size='small'
            margin="dense"
            id="asset"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleTextInput}
            helperText={validate?"Field cannot be empty!": null}
            error={validate?true: false}
          />
        </DialogContent>
        <DialogActions >
          <Button onClick={handleSubmit}>Done</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
