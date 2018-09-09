import React, { Component } from 'react';
import WidgetSpendInnerContainer from './widgetSpendInnerContainer';
import './widgetSpend.css';

function widgetSpendContainer(props){
    return(
        <React.Fragment>
            <header className="widget-spend-container-title"> {props.title}</header>
            <WidgetSpendInnerContainer data={props.data}/>
        </React.Fragment>
    )
}

export default widgetSpendContainer;
