import React, {Fragment, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/compras/'
const baseunoUrl = 'http://127.0.0.1:8000/carros/'
const basetresUrl = 'http://127.0.0.1:8000/personas/'
const basecuatroUrl = 'http://127.0.0.1:8000/ventas/'

const Content = () => {
    const [compras, setData]=useState([]);
    const [carros, setData1]=useState([]);
    const [personas, setData3]=useState([]);
    const [ventas, setData4]=useState([]);

    const peticionGet=async()=>{
        await axios.get (baseUrl)
        .then(response=>{
            setData(response.data.count);
        })
      }

    const peticionGetcarros=async()=>{
        await axios.get (baseunoUrl)
        .then(response=>{
            setData1(response.data.count);
        })
      }
      
    const peticionGetpersonas=async()=>{
        await axios.get (basetresUrl)
        .then(response=>{
            setData3(response.data.count);
        })
      }
    
    const peticionGetventas=async()=>{
        await axios.get (basecuatroUrl)
        .then(response=>{
            setData4(response.data.count);
        })
      }
      
      React.useEffect(async()=>{
        await peticionGet();
      },[])

    React.useEffect(async()=>{
        await peticionGetcarros();
      },[])

    React.useEffect(async()=>{
        await peticionGetpersonas();
      },[])

    React.useEffect(async()=>{
        await peticionGetventas();
      },[])  

    return ( 
        
        <div className = "pt50">
            <div className = "row justify-content-center">
                <div className = "col-20 col-md-2">
                    <div className = "counter_box">
                        <div className = "divider"></div>
                          <span className = "counter">{carros}</span>              
                        <h5>Carros Totales</h5>
                    </div>
                </div>
                <div className="col-20 col-md-2">
                    <div className="counter_box">
                        <div className="divider"></div> 
                        <span className="counter">{personas}</span>
                        <h5>Clientes</h5>
                    </div>
                </div>
                <div className = "col-20 col-md-2">
                    <div className = "counter_box">
                        <div className = "divider"></div>
                        <span className = "counter">{ventas}</span>                                            
                        <h5>Ventas</h5>
                    </div>
                </div>
                <div className = "col-16 col-md-4">
                    <div className = "counter_box">
                        <div className = "divider"></div>
                        <span className = "counter">{compras}</span>                                            
                        <h5>Compras</h5>
                    </div>
                </div>
            </div>
        </div>                                    
     );
}
 
export default Content;

