import React, { Component } from 'react';
import './widgetSpend.css';
import WidgetSpendSection from './widgetSpendSection';
import WidgetSpendSlider from './widgetSpendSlider';
import WidgetSpendFooter from './widgetSpendFooter';

function widgetSpendInnerContainer(props){
    return(
        <div className="container">
            <WidgetSpendSection nameOfClass={"widget-spend-section-upper"}>
                <p>
                    Try reducing your monthly spending to see how your forecast could improve!
                </p>
            </WidgetSpendSection>
            <WidgetSpendSection nameOfClass={"widget-spend-section-middle"}>
                <WidgetSpendSlider sliderName={"Mortgage"}/>
                <WidgetSpendSlider sliderName={"Bills"}/>
                <WidgetSpendSlider sliderName={"General Spending"}/>
            </WidgetSpendSection>
            <WidgetSpendSection nameOfClass={"widget-spend-section-bottom"}>
                <WidgetSpendFooter amount={456}/>
            </WidgetSpendSection>
        </div>
    )
}

export default widgetSpendInnerContainer;
