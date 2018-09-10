import React, { Component } from 'react';
import './widgetIncome.css'

class WidgetIncomeInput extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        const value = localStorage.getItem(this.props.randomStorageValue) ? localStorage.getItem(this.props.randomStorageValue) : this.props.inputValue;
        this.setState({ value });
    }


    onChange = (e) => {
        this.setState({ value: e.target.value }, () => {
            localStorage.setItem(this.props.randomStorageValue, this.state.value)
        });
    };

    render() {
        let style = {
            width: `${this.props.widthValue}`,
        };
        return (
            <div className="widget-input-container">
                <label className="widget-input-label">{this.props.labelName}</label>
                <input type="number" name={this.props.randomStorageValue} className="widget-input" style={style}
                       onChange={(value) => this.onChange(value)} value={this.state.value}/>
            </div>
        )
    }
}

export default WidgetIncomeInput;
