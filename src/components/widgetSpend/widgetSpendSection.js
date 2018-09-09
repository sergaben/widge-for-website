import React, { Component } from 'react';
import './widgetSpend.css';

function widgetIncomeSection(props){
    return(
        <div className={props.nameOfClass}>
            {props.children}
        </div>
    )
}

export default widgetIncomeSection;
