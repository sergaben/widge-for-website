import React, { Component } from 'react';



function widget_container(props){
    return(
        <div>
            <header> {props.title}</header>
            <div>
                {props.children}
            </div>
        </div>
    )
}
