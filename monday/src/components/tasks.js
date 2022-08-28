import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { taskWindow } from '../App';
import { useRecoilState } from 'recoil';
import TasksAccordions from './tasksAccordian';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Tasks() {
  const [tasksWin, setTasksWin] = useRecoilState(taskWindow)


  const handleClose = () => {
    setTasksWin({
        open:false,
        id:'',
        name:'',
        task_list:[]
    });
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={tasksWin.open}
        onClose={handleClose}
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
          </Toolbar>
        </AppBar>
        <TasksAccordions />
      </Dialog>
    </div>
  );
}
