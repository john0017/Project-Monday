import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { inputDialog } from '../App';
import { useRecoilState } from 'recoil';



export default function InputDialog() {

  const [inputDialog_, setInputDialog] = useRecoilState(inputDialog)
  const [textIn, setTextIn] = React.useState('')

  const handleSubmit = () => {
    setInputDialog(prev =>({...prev, respose:textIn}))
  };
  const handleClose = () => {
    setInputDialog(false);
  };

  const handleTextInput=(e)=>{
    setTextIn(e.target.value)
    console.log(e.target.value)
  }


  return (
    <div>
      <Dialog open={inputDialog_.open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            { inputDialog_.msg }
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="asset"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleTextInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Done</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
