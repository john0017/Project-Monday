import React from 'react';
import axios from 'axios'
import { uploadImgList } from '../App';
import { useRecoilState } from 'recoil';



const PDFViewer = () => {

    const [getPDF, setGetPDF] = React.useState('')
    const [image, setImage] = useRecoilState(uploadImgList)

    React.useEffect(()=>{
      const asset = '21 a5fdcca-9465-4d70-98d9-37b5dc1b3e8d'
      console.log(image)

        axios.get('https://protoxsys.eu.pythonanywhere.com/generatePDF/'+asset
            )
          .then(function (response) {
            console.log(response.data);
            setGetPDF(response.data)

          })
          .catch(function (error) {
            console.log(error);
          });
    },[])

    return (
       
        
        <div>
          
        </div>
        
    );
};

export default PDFViewer;