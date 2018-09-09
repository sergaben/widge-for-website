import React , { Component } from 'react'
import financial_data from '../../data/financial_data';
import WidgetIncomeContainer from '../../components/widgetIncome/widgetIncomeContainer';
import WidgetSpendContainer from '../../components/widgetSpend/widgetSpendContainer';
import './index.css';
class WidgetPage extends Component{
    constructor(props){
        super(props);
        this.state = financial_data; // This has to be changed if the data is going to be fetch from some API
    }

    render(){

        return(
            <div className={"widget-page"}>
                <div className={"widget-element"} style={{marginLeft:"40%"}}><WidgetIncomeContainer title="YOUR INCOME & SPEND " data={this.state}/></div>
                <div className={"widget-element"} ><WidgetSpendContainer title="SPEND LESS" data={this.state}/></div>
            </div>
        )
    }
}

export default WidgetPage;
