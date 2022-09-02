import React from 'react';
import './App.css';
import Home from './components/home';
import { atom, useRecoilState } from 'recoil';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Tasks from './components/tasks';
import ImageViewer from './components/imageViewer';
import Alerts from './components/alerts';
import PdfGen from './components/pdfGen';
import PDFViewer from './components/pdfViewer';



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

export const uploadImgList = atom({
  key:'uploadImgList',
  default:{
    asset_id:'',
    task_id:'',
    mode:'after',
    image_list:[]
  }
})

export const spinner = atom({
  key:'spinner',
  default:false
})

export const assetTaskImageList = atom({
  key:'assetTaskImageList',
  default:[]
})

export const alerts = atom({
  key:'alerts',
  default:{
    open:false,
    type:'success',
    color:'',
    message:'success'
  }
})


function App() {

  const [_assets, setAssets] = useRecoilState(assets)
  const [_tasks, setTasks] = useRecoilState(tasks)
  const [image, setImage] = useRecoilState(uploadImgList)



  React.useEffect(()=>{
    console.log(image)
  },[image])

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
        // console.log(resp.data)
        setTasks(resp.data)
    }).catch((err)=>{
        console.log(err)
    });
  
  },[])


  return (
    <div className="App">
      <PDFViewer />
      {/* <ImageViewer />
      <Tasks />
      <Home /> */}
    </div>
  );
}

export default App;
