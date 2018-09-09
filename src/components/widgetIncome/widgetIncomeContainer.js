import React, { Component } from 'react';
import WidgetIncomeForm from './widgetIncomeForm';
import './widgetIncome.css';


function widgetIncomeContainer(props){
    return(
        <React.Fragment>
            <div className="widget-container-title"> {props.title}</div>
            <WidgetIncomeForm data={props.data}/>
        </React.Fragment>
    )
}

export default widgetIncomeContainer;
