import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import FilterIcon from '@mui/icons-material/Filter';
import Badge from '@mui/material/Badge';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { assets, alerts, inputDialog } from '../App';
import { useRecoilState } from 'recoil';
import { IconButton, Typography } from '@mui/material';
import Tasks from './tasks';
import { taskWindow, tasks, uploadImgList } from '../App';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


export default function PropertyStack() {

  const [_assets, setAssets] = useRecoilState(assets)
  const [tasksWin, setTasksWin] = useRecoilState(taskWindow)
  const [tasksList, setTaskslist] = useRecoilState(tasks)
  const [image, setImage] = useRecoilState(uploadImgList)
  const [alert, setAlerts] = useRecoilState(alerts)
  const [inputDialog_, setInputDialog] = useRecoilState(inputDialog)
  const [toolBarState, setToolBarState] = React.useState(false)
  

  const handleClick =(id, name)=>{
    let taskSelection ={
      id:id,
      list:[]
    }

    tasksList.map((task)=>{
            if(task.asset_id==id){
              taskSelection.list.push(task)
            }
          })
          console.log(taskSelection)

          if(taskSelection.list.length<=0){
            setAlerts({
              open:true,
              type:'error',
              color:'error',
              message:'No Tasks'
            })
          }
          else{
            setTasksWin({
              open:true,
              id:id,
              name:name,
              task_list:taskSelection
              })
          }
          setImage(prevState => ({...prevState, asset_id:id}))
  }

  React.useEffect(()=>{
    if(inputDialog_.response!=""){

    }
  }, [inputDialog_])

  return (
    <>
    <Box
      sx={{
        width: '100%',
        padding: '5px',
        marginY: '10px',
      }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {
          _assets.map((item, idx) => {

            return <Paper
                    key={idx}
                    elevation={1}
                    sx={{
                      paddingX: '5px',
                      bgcolor: 'grey',
                      minHeight: '30px',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onClick={() => handleClick(item.u_id, item.name)}
                  >
                    <Typography noWrap>
                    {item.name}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'space-around'
                      }}
                    >
                      {item.task_list==0? <PlaylistAddIcon />: <PlaylistAddCheckIcon color='success'/>}

                      {/* <ListAltIcon 
                        color={item.task_list==0? 'error': 'success'}
                      /> */}
                    </Box>

                    {/* tool bar */}
                    {/* <Box
                      sx={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        
                      }}
                    >
                      <IconButton>
                      {item.task_list==0? <PlaylistAddIcon />: <PlaylistAddCheckIcon color='success'/>}
                      </IconButton>
                      <IconButton>
                        <DeleteIcon color='error'/>
                      </IconButton>
                      <IconButton>
                        <EditIcon color='secondary'/>
                      </IconButton>
                    </Box> */}

                  </Paper>
            
          })
        }

      </Stack>
    </Box >
    </>
  );
}
