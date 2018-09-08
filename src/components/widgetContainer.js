import React, { Component } from 'react';
import './widgetContainer.css';

// TODO - add all the inputs and rest of elements to containers
// TODO - think of a way to transfer the data to different elements

function widgetContainer(props){
    return(
        <div className="container">
            <div className="widget-container-title"> {props.title}</div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default widgetContainer;
