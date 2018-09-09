import React, { Component }from 'react';
import '../widgetContainer.css'

class WidgetIncomeInput extends Component{

    constructor() {
        super();
        this.state ={
            value:''
        }
    }

    componentDidMount(){
            this.setState({value:localStorage.getItem(this.props.randomStorageValue)});
            setTimeout(this.clearLocalStorage,3000);
    }

    clearLocalStorage= () =>{
        localStorage.clear()
    };

    onChange = (e) =>{
            if(!this.state.value){
                this.setState({[e.target.name]: e.target.value});
                localStorage.setItem(this.props.randomStorageValue,e.target.value)
            }else{
                this.setState({[e.target.name]: e.target.value});
                localStorage.setItem(this.props.randomStorageValue,e.target.value)
            }

    };

    render(){
        let style = {
            width: `${this.props.widthValue}`,
        };
        return(
            <div className="widget-input-container">
                <label className="widget-input-label">{this.props.labelName}</label>
                <input type="number" name={this.props.randomStorageValue} className="widget-input" style={style} onChange={(value) => this.onChange(value)} value={this.state.value}/>
            </div>
        )
    }
}

export default WidgetIncomeInput;
