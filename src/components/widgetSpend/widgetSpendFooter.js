import React, { Component } from 'react';
import thumbUp from '../../thumbs-up-regular.svg';
import thumbDown from '../../thumbs-down-regular.svg';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'


class WidgetSpendFooter extends Component{
    constructor(props){
        super();
        this.state = {
            isHidden: false
        }
    }

    helpfulMessageThumbUp= () =>{
        alert("Great you found this little widget helpful !!");
        this.setState({isHidden:true});
    };

    helpfulMessageThumbDown= () =>{
        alert("Sorry, that you did not find this widget helpful");
        this.setState({isHidden:true});
    };
    openExternalWebsite = () =>{
        window.open("https://github.com/sergaben","_blank");
    };
    render() {
        return (
            <React.Fragment>
                <div className="widget-spend-saved">This means you're saving <span
                    className="widget-spend-color-amount-saved">£{this.props.amount}</span> per month
                </div>
                <button className="widget-spend-button" onClick={() => this.openExternalWebsite()}>Find ways to save</button>
                <div className={this.state.isHidden ? "widget-spend-helpful-hidden" : "widget-spend-helpful"}>
                    <span style={{textDecoration: "underline", gridColumn: 1, lineHeight: "30px", marginRight: "5px"}}>was this helpful?</span>
                    <FaThumbsUp size={"2em"} color={"#5dba00"} onClick={() => this.helpfulMessageThumbUp()}
                                style={{gridColumn: 2, marginLeft: "5px"}}/>
                    <FaThumbsDown size={"2em"} color={"blue"} onClick={() => this.helpfulMessageThumbDown()}
                                  style={{gridColumn: 3, marginLeft: "5px"}}/>
                </div>
            </React.Fragment>
        )
    }
}

export default WidgetSpendFooter;
