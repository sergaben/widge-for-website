import React, { Component } from 'react';
import WidgetIncomeSection from './widgetIncomeSection';
import WidgetIncomeInput from './widgetIncomeInput';
import '../widgetContainer.css';

// TODO - add all the inputs and rest of elements to containers
// TODO - think of a way to transfer the data to different elements

function widgetIncomeForm(props){

    console.log(props.data);

    return(
        <div className="container">
            <WidgetIncomeSection sectionName={"Annual Income"}>
                {props.data.incomes.map( income =>
                        <div className="widget-section-grid">
                            <WidgetIncomeInput labelName={income.name + ": "} widthValue={"70%"} inputValue={income.amount}/>
                            <WidgetIncomeInput labelName={"From age: "} widthValue={"50%"} inputValue={income.from_age}/>
                            <WidgetIncomeInput labelName={"To age: "} widthValue={"50%"} inputValue={income.to_age}/>
                        </div>
                    )
                }
            </WidgetIncomeSection>
            <WidgetIncomeSection sectionName={"Monthly spending"}>
                    {props.data.expenditures.map( expenditure =>
                            <div className="widget-section-grid">
                                <WidgetIncomeInput labelName={expenditure.name + ": "} widthValue={"70%"} inputValue={expenditure.amount}/>
                                <WidgetIncomeInput labelName={"From age: "} widthValue={"50%"} inputValue={expenditure.from_age}/>
                                <WidgetIncomeInput labelName={"To age: "} widthValue={"50%"} inputValue={expenditure.to_age}/>
                            </div>
                        )
                    }
            </WidgetIncomeSection>
        </div>
    )
}

export default widgetIncomeForm;
