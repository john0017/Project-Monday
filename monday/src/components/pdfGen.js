import React from "react";
import './pdfStyles.css'
import logo from '../ihps.png'
import html2canvas from "html2canvas";
import jsPDF from 'jspdf'



const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];



export default function PdfGen() {

    const document = React.useRef()
    const exportPDF =()=>{
        const input = document.current;
        html2canvas(input, {logging:true, letterRendering:1}).then( canvas =>{
            const imgWidth = 208
            const imgHeight = canvas.height * imgWidth / canvas.width
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4')
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
            pdf.save('test.pdf')
        })
    }

    return (
    <>
    <div className="parent">
        <div className="main-container" ref={document}>

            <div className="row-1">
                <div className="row-col-2">
                    <span className="title-row-col-2">Property Inspection Report </span> 
                    <br/>
                    <br/>
                    <span className="head-row-col-2">Site Address: </span> 
                    <span className="sub-row-col-2">6 Valentia House</span>
                    <br/>
                    <span className="head-row-col-2">Prepared By: </span> 
                    <span className="sub-row-col-2">IH Property Services</span>
                    <br/>
                    <span className="head-row-col-2">Date: </span> 
                    <span className="sub-row-col-2">01 September 2022</span>
                </div>
                <div className="row-col-1">
                    <img src={logo}
                        height={140} 
                        width={200}
                        alt='image'
                    />
                </div>
            </div>

            <div className="row-2">
                <div className="row-2-col-1">
                    Provide new fire blanket, smoke, heat and corbon monoxide detectors througout the house.
                </div>
                <div className="row-2-col-2">
                    {
                        itemData.map((img)=>{
                            return<img src={img.img} 
                                height={75} 
                                width={120}
                                className='row-2-col-2-img'
                            />
                        })
                    }
                    
                </div>

            </div>
            
            <div className="row-2">
                <div className="row-2-col-1">
                    Provide new fire blanket, smoke, heat and corbon monoxide detectors througout the house.
                </div>
                <div className="row-2-col-2">
                    {
                        itemData.map((img)=>{
                            return<img src={img.img} 
                                height={75} 
                                width={120}
                                className='row-2-col-2-img'
                            />
                        })
                    }
                    
                </div>

            </div>

            <div className="row-2">
                <div className="row-2-col-1">
                    Provide new fire blanket, smoke, heat and corbon monoxide detectors througout the house.
                </div>
                <div className="row-2-col-2">
                    {
                        itemData.map((img)=>{
                            return<img src={img.img} 
                                height={75} 
                                width={120}
                                className='row-2-col-2-img'
                            />
                        })
                    }
                    
                </div>

            </div>

            <div className="row-2">
                <div className="row-2-col-1">
                    Provide new fire blanket, smoke, heat and corbon monoxide detectors througout the house.
                </div>
                <div className="row-2-col-2">
                    {
                        itemData.map((img)=>{
                            return<img src={img.img} 
                                height={75} 
                                width={120}
                                className='row-2-col-2-img'
                            />
                        })
                    }
                    
                </div>

            </div>

            <div className="row-2">
                <div className="row-2-col-1">
                    Provide new fire blanket, smoke, heat and corbon monoxide detectors througout the house.
                </div>
                <div className="row-2-col-2">
                    {
                        itemData.map((img)=>{
                            return<img src={img.img} 
                                height={75} 
                                width={120}
                                className='row-2-col-2-img'
                            />
                        })
                    }
                    
                </div>

            </div>

            <div
                className="footer"
            >
                <span>Jonas Zemaitis</span>
                <br/>
                <span>jonas@irishhomespropertyservices.ie</span>
                <br/>
                <br/>
                <span>Signature:</span>
                
            </div>
        </div>
        {/* <button
            
            onClick={exportPDF}>
pdf
            </button> */}
    </div>

    </>
);
}