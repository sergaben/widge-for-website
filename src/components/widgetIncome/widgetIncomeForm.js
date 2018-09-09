import React, { Component } from 'react';
import WidgetIncomeSection from './widgetIncomeSection';
import WidgetIncomeInput from './widgetIncomeInput';
import './widgetIncome.css';



// TODO - Disgusting global variables, get rid of them
let counter = 0;
let rowValue = 1;

function getRandomNumber(){
    return Math.floor((Math.random() * 4000) + 1);
}

function getCounter(){
    return ++counter
}

function getRowValue(){
    return ++rowValue;
}

function widgetIncomeForm(props){

    console.log(props.data);


    return(
        <div className="container">
            <WidgetIncomeSection nameOfClass={"widget-section-upper"} sectionName={"Annual Income"}>
                {props.data.incomes.map( (income,i) =>
                        <div className="widget-section-grid" key={i+getRandomNumber()}>
                            <WidgetIncomeInput labelName={income.name + ": "} widthValue={"70%"} inputValue={income.amount} randomStorageValue={"input"+getCounter()}/>
                            <WidgetIncomeInput labelName={"From age: "} widthValue={"50%"} inputValue={income.from_age} randomStorageValue={"input"+getCounter()}/>
                            <WidgetIncomeInput labelName={"To age: "} widthValue={"50%"} inputValue={income.to_age} randomStorageValue={"input"+getCounter()}/>
                        </div>
                    )
                }
            </WidgetIncomeSection>
            <WidgetIncomeSection nameOfClass={"widget-section-bottom"} sectionName={"Monthly spending"}>
                    {props.data.expenditures.map( (expenditure,i) =>
                            <div className="widget-section-grid" style={{gridRow:getRowValue()}} key={i+getRandomNumber()}>
                                <WidgetIncomeInput labelName={expenditure.name + ": "} widthValue={"70%"} inputValue={expenditure.amount} randomStorageValue={"input"+getCounter()}/>
                                <WidgetIncomeInput labelName={"From age: "} widthValue={"50%"} inputValue={expenditure.from_age} randomStorageValue={"input"+getCounter()}/>
                                <WidgetIncomeInput labelName={"To age: "} widthValue={"50%"} inputValue={expenditure.to_age} randomStorageValue={"input"+getCounter()}/>
                            </div>
                        )
                    }
            </WidgetIncomeSection>
        </div>
    )
}

export default widgetIncomeForm;
