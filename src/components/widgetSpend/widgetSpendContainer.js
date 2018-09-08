import React, { Component } from 'react';
import '../widgetContainer.css'
// TODO - add all the inputs and rest of elements to containers
// TODO - think of a way to transfer the data to different elements

function widgetSpendContainer(props){
    return(
        <div className="container">
            <header className="widget-container-title"> {props.title}</header>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default widgetSpendContainer;
