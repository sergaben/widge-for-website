import React, { Component } from 'react';
import './widgetIncome.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { incomeAction } from '../../actions';

class WidgetIncomeInput extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        // const value = localStorage.getItem(this.props.randomStorageValue) ? localStorage.getItem(this.props.randomStorageValue) : this.props.inputValue;
        // this.setState({ value });
        const value = localStorage.getItem(this.props.randomStorageValue) ? localStorage.getItem(this.props.randomStorageValue) : this.props.inputValue;
        this.setState({ value });

        this.props.incomeAction({name: this.props.expenditure, value});
    }


    onChange = (e) => {
        this.setState({ value: e.target.value }, () => {
            if (this.props.expenditure) {
                this.props.incomeAction({name: this.props.expenditure, value: this.state.value});
            }
            localStorage.setItem(this.props.randomStorageValue, this.state.value)
            // localStorage.setItem(this.props.randomStorageValue, this.state.value)
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ incomeAction }, dispatch);

export default connect(null, mapDispatchToProps)(WidgetIncomeInput);
