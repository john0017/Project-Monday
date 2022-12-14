import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { taskWindow, uploadImgList } from '../App';
import { useRecoilState } from 'recoil';
import AccordianToolbar from './accordianToolbar';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function TasksAccordions() {
    const [expanded, setExpanded] = React.useState('');

    const [tasksWin, setTasksWin] = useRecoilState(taskWindow)
    const [image, setImage] = useRecoilState(uploadImgList)


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const setTaskID =(id)=>{
      setImage(prevState => ({...prevState, task_id:id}))
    }

    return (
        <div>
            {
                tasksWin.task_list.list!=undefined? tasksWin.task_list.list.map((item, idx)=>{
                    return <Accordion key={idx} expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                                   onClick={()=>setTaskID(item.task_id)}
                                >
                                <Typography >
                                    {item.tasks}
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <AccordianToolbar/>

                                </AccordionDetails>
                            </Accordion>
                            
                })
                : null
            }
        </div>
    );
}
