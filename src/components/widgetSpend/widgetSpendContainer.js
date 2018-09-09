import React, { Component } from 'react';
import WidgetSpendInnerContainer from './widgetSpendInnerContainer';
import './widgetSpend.css';
// TODO - add all the inputs and rest of elements to containers
// TODO - think of a way to transfer the data to different elements

function widgetSpendContainer(props){
    return(
        <React.Fragment>
            <header className="widget-spend-container-title"> {props.title}</header>
            <WidgetSpendInnerContainer data={props.data}/>
        </React.Fragment>
    )
}

export default widgetSpendContainer;
