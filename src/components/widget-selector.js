import React, { Component } from 'react';
import WidgetContainer from 'widget-container';

function widget_selector(props){
    return(
        <div>
            if(props.selection ==1 ) <WidgetContainer title="YOUR INCOME & SPEND" data={props.data}/> else <WidgetContainer title="SPEND LESS" data={props.data}/>
        </div>
    )
}

export default widget_selector;
