import React, { Component } from 'react';
import './widgetIncome.css';


function widgetIncomeSection(props){
    return(
        <div className={props.nameOfClass}>
            <div className="widget-section-name">{props.sectionName}</div>
            {props.children}
        </div>
    )
}

export default widgetIncomeSection;
