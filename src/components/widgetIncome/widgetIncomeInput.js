import React from 'react';
import '../widgetContainer.css'

function widgetIncomeInput(props){

    let style = {
        width: `${props.widthValue}`,
    };

    return(
        <div className="widget-input-container">
            <label className="widget-input-label">{props.labelName}</label>
            <input type="number" className="widget-input" style={style} value={props.inputValue}/>
        </div>
    )
}

export default widgetIncomeInput;
