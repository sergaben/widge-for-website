import React from 'react';
import './widgetSpend.css';

function widgetSpendSlider(props){
    return(
        <React.Fragment className="widget-spend-slider-grid">
            <span style={{fontWeight:"bold",gridColumn:1,textAlign:"left",padding:"7px"}}>{props.sliderName}</span>
            <div className="widget-spend-slider-container">
                <input type="range" min="1" max="100" value="50" className="widget-spend-slider" id="myRange"/>
            </div>
        </React.Fragment>
    )
}

export default widgetSpendSlider;
