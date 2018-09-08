import React, { Component } from 'react';
import WidgetIncomeForm from './widgetIncomeForm';
import '../widgetContainer.css';

// TODO - add all the inputs and rest of elements to containers
// TODO - think of a way to transfer the data to different elements

function widgetIncomeContainer(props){
    return(
        <React.Fragment>
            <header className="widget-container-title"> {props.title}</header>
            <WidgetIncomeForm data={props.data}/>
        </React.Fragment>
    )
}

export default widgetIncomeContainer;
