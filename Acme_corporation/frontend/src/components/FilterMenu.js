import React from 'react'


const FilterMenu = () => {
    return (  
    
    <div className="side_menu_section">
        
        <h4 className="side_title">filter by:</h4>
        <ul  id="filtr-container"  className="filter_nav">
            <li  data-filter="*" className="active"><a href="#" onClick={e => e.preventDefault()}>all</a></li>
            <li data-filter=".branding"> <a href="#" onClick={e => e.preventDefault()}>branding</a></li>
            <li data-filter=".design"><a href="#" onClick={e => e.preventDefault()}>design</a></li>
            <li data-filter=".photography"><a href="#" onClick={e => e.preventDefault()}>photography</a></li>
            <li data-filter=".architecture"><a href="#" onClick={e => e.preventDefault()}>architecture</a></li>
          </ul>
    </div>


    );
}
 
export default FilterMenu
;
