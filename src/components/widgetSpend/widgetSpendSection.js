import React, { Component } from 'react';
import './widgetSpend.css';

// TODO - add all the inputs and rest of elements to containers
// TODO - think of a way to transfer the data to different elements

function widgetIncomeSection(props){
    return(
        <div className={props.nameOfClass}>
            {props.children}
        </div>
    )
}

export default widgetIncomeSection;
