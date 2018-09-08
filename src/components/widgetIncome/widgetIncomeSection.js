import React, { Component } from 'react';
import '../widgetContainer.css';

// TODO - add all the inputs and rest of elements to containers
// TODO - think of a way to transfer the data to different elements

function widgetIncomeSection(props){
    return(
        <div className="widget-section">
            <div className="widget-section-name">{props.sectionName}</div>
            {props.children}
        </div>
    )
}

export default widgetIncomeSection;
