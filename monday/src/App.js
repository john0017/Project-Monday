import React from 'react';
import './App.css';
import Home from './components/home';
import { atom, useRecoilState } from 'recoil';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Tasks from './components/tasks';
import ImageViewer from './components/imageViewer';
import WebcamComp from './components/webcamComp';


export const assets = atom({
  key:'assets',
  default:[]
})

export const tasks = atom({
  key:'tasks',
  default:[]
})

export const taskWindow = atom({
  key:'taskWindow',
  default:{
    open:false,
    id:'',
    name:'',
    task_list:[]
  }
})

export const imageWindow = atom({
  key:'imageWindow',
  default:{
    open:false,
    id:'',
    name:'',
    image_list:[]
  }
})


function App() {

  const [_assets, setAssets] = useRecoilState(assets)
  const [_tasks, setTasks] = useRecoilState(tasks)

  React.useEffect(()=>{

    axios.get('https://protoxsys.eu.pythonanywhere.com/assets').then(resp=>{
        // console.log(resp.data)
        setAssets(resp.data)
    }).catch((err)=>{
        console.log(err)
    });
  
  },[])

  React.useEffect(()=>{

    axios.get('https://protoxsys.eu.pythonanywhere.com/tasks').then(resp=>{
        console.log(resp.data)
        setTasks(resp.data)
    }).catch((err)=>{
        console.log(err)
    });
  
  },[])


  return (
    <div className="App">
      {/* <WebcamComp /> */}
      <ImageViewer />
      <Tasks />
      <Home />
    </div>
  );
}

export default App;
