import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import FilterIcon from '@mui/icons-material/Filter';
import Badge from '@mui/material/Badge';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { assets } from '../App';
import { useRecoilState } from 'recoil';
import { Typography } from '@mui/material';
import Tasks from './tasks';
import { taskWindow } from '../App';
import { tasks } from '../App';



export default function PropertyStack() {

  const [_assets, setAssets] = useRecoilState(assets)
  const [tasksWin, setTasksWin] = useRecoilState(taskWindow)
  const [tasksList, setTaskslist] = useRecoilState(tasks)


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
          // console.log(taskSelection)

          if(taskSelection.list.length<=0){

            console.log('no tasks')
          }
          else{
            setTasksWin({
              open:true,
              id:id,
              name:name,
              task_list:taskSelection
              })
          }
  }

  return (
    <Box
      sx={{
        width: '100%',
        padding: '5px',
        marginY: '10px'
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
                <ListAltIcon 
                  color={item.task_list==null|0? 'error': 'success'}
                />
                <HourglassTopIcon 
                  sx={{
                    display:item.snags==null|0? 'none':"",
                  }}
                />
                <Badge
                  badgeContent={item.image_count==null|0? 0:item.image_count}
                  color="primary"
                  sx={{
                    marginRight: '3px'
                  }}
                >
                  <FilterIcon />
                </Badge>
              </Box>
            </Paper>
          })
        }

      </Stack>
    </Box >
  );
}