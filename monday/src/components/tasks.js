import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { taskWindow, uploadImgList } from '../App';
import { useRecoilState } from 'recoil';
import TasksAccordions from './tasksAccordian';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClickAwayListener from '@mui/base/ClickAwayListener';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Tasks() {
  const [tasksWin, setTasksWin] = useRecoilState(taskWindow)
  const [image, setImage] = useRecoilState(uploadImgList)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setTasksWin({
        open:false,
        id:'',
        name:'',
        task_list:[]
    });

    setImage({
      asset_id:'',
      task_id:'',
      mode:'after',
      image_list:[]
    })
  };

  const handleClickAway =(e)=>{
    e.preventDefault();
    console.log('clicked Away')
  }

  const onCloseHandler=(event, reason)=>{
    console.log(tasksWin.open)
    if(reason=='backdropClick'){
      event.preventDefault()
    }
  }

  return (
    <div>
      <Dialog
        fullScreen
        open={tasksWin.open}
        onClose={onCloseHandler}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'sticky' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography noWrap fontWeight={700}>
                {tasksWin.name}
            </Typography>

            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{marginLeft:'auto'}}
            >
              <MoreVertIcon sx={{color:'white'}} />
            </IconButton>
            <ClickAwayListener onClickAway={handleClickAway}>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem >Add Task</MenuItem>
                <MenuItem >Mark As Complete</MenuItem>
                <MenuItem >Upload Tasks </MenuItem>
                <MenuItem >Get PDF </MenuItem>
              </Menu>
            </ClickAwayListener>
          </Toolbar>
        </AppBar>
        <TasksAccordions />
      </Dialog>
    </div>
  );
}
