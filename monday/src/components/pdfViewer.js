import React from 'react';
import axios from 'axios'
import { Document } from 'react-pdf'
import { saveAs } from 'file-saver';





const PDFViewer = () => {

    const [getPDF, setGetPDF] = React.useState('')

    React.useEffect(()=>{
        axios.get('https://protoxsys.eu.pythonanywhere.com/pdf'
            )
          .then(function (response) {
            console.log(response);

          })
          .catch(function (error) {
            console.log(error);
          });
    },[])

    return (
       
        <>
        <a href="https://getpoco.s3.eu-west-1.amazonaws.com/myTest.pdf">freeCodeCamp</a>
        </>
    );
};

export default PDFViewer;