import React , { Component } from 'react'
import financial_data from '../../data/financial_data';
import WidgetSelector from '../../components/widget-selector';
class WidgetPage extends Component{
    constructor(props){
        super(props);
        this.state = financial_data; // This has to be changed if the data is going to be fetch from some API
    }

    render(){
        return(
            <div className={styles.widget-page}>
                <div className={styles.widget-element}><WidgetSelector selection={1} data={this.state}/></div>
                <div className={styles.widget-element}><WidgetSelector selection={2} data={this.state}/></div>
            </div>
        )
    }
}

export default WidgetPage;
