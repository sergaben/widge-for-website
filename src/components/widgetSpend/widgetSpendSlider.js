import React, { Component } from 'react';
import './widgetSpend.css';

class WidgetSpendSlider extends Component{
    constructor(props){
        super();
        this.state={value:1000}
    }

    onChange = (e) =>{
        this.setState({value:e.target.value});
    };

    render() {
        return (
            <React.Fragment className="widget-spend-slider-grid">
                <span style={{
                    fontWeight: "bold",
                    gridColumn: 1,
                    textAlign: "left",
                    padding: "7px"
                }}>{this.props.sliderName}</span>
                <div className="widget-spend-slider-container">
                    <input type="range" min="1" max="45000" value={this.state.value} onChange={this.onChange} className="widget-spend-slider"
                           id="myRange"/>
                </div>
            </React.Fragment>
        )
    }
}

export default WidgetSpendSlider;
