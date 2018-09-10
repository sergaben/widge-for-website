import React, { Component } from 'react';
import './widgetSpend.css';
import { connect } from 'react-redux';

class WidgetSpendSlider extends Component{
    constructor(props) {
        super();
        this.state = {
            value: 1000,
            max: 1000
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.someValue !== prevState.someValue) {
            return { someState: nextProps.someValue };
        }
        else return null;
    }

    componentDidMount() {
        this.getMax();
        console.log('exp: ', this.props);
        // this.setState({value: this.props.expenditureData.value})
    }

    componentDidUpdate() {
        this.getMax();
    }

    getMax() {
        if (this.props.expenditureData && (this.props.sliderName === this.props.expenditureData.name && this.state.value !== this.props.expenditureData.value)) {
            this.setState({ max: this.props.expenditureData.value })
        }
    }

    onChange = (e) =>{
        this.setState({value:e.target.value});
    };

    render() {
        return (
            <React.Fragment>
                <span style={{
                    fontWeight: "bold",
                    gridColumn: 1,
                    textAlign: "left",
                    padding: "7px"
                }}>{this.props.sliderName}</span>
                <div className="widget-spend-slider-container">
                    <input type="range" min="1" max={this.state.max} title={this.state.value} value={this.state.value} onChange={this.onChange} className="widget-spend-slider"
                           id="myRange"/>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateProps = ({ income }) => ({
    expenditureData: income.data
});

export default connect(mapStateProps)(WidgetSpendSlider);
