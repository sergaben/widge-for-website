import React, { Component } from 'react';
import WidgetContainer from './widgetContainer';

function widgetSelector(props){
    return(
        <div>
            {   props.selection ===1 ? <WidgetContainer title="YOUR INCOME & SPEND" data={props.data}/> :
                <WidgetContainer title="SPEND LESS" data={props.data}/>
            }
        </div>
    )
}

export default widgetSelector;
