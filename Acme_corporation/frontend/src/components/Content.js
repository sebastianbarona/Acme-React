import React from 'react';

const Content = () => {
    return ( 
        
        <div className = "pt50">
            <div className = "row justify-content-center">
                <div className = "col-20 col-md-2">
                    <div className = "counter_box">
                        <div className = "divider"></div>
                        <span className = "counter">12</span>
                        <h5>Carros Totales</h5>
                    </div>
                </div>
                <div className="col-20 col-md-2">
                    <div className="counter_box">
                        <div className="divider"></div> 
                        <span className="counter">21</span>
                        <h5>Clientes</h5>
                    </div>
                </div>
                <div className = "col-20 col-md-2">
                    <div className = "counter_box">
                        <div className = "divider"></div>
                        <span className = "counter">10</span>                                            
                        <h5>Ventas</h5>
                    </div>
                </div>
                <div className = "col-16 col-md-4">
                    <div className = "counter_box">
                        <div className = "divider"></div>
                        <span className = "counter">10</span>                                            
                        <h5>Compras</h5>
                    </div>
                </div>
            </div>
        </div>                                    
     );
}
 
export default Content;

