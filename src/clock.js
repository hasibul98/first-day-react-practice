import React from "react";
import { ReactDOM } from "react-dom";
import date from 'date-and-time';

class ClockOne extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
        // this.state={date2: new Date()};
    }
    render(){
        const date = require('date-and-time');
        const now = new Date();
        const pattern = date.compile('ddd, MMM DD YYYY');
        return(
            
            <div>
                <h1>{this.state.date.toLocaleTimeString(this.props.locale)}</h1>
                <h1>{Date()}</h1>
                <h2>{ Date()}</h2>
                <h2>{date.format(now, 'YYYY/MM/DD HH:mm:ss')}</h2>
                <h1>{date.format(now, 'ddd, MMM DD YYYY')}</h1>
                <h1>{date.format(now, 'hh:mm A [GMT]Z')}</h1>
                <h1>{date.format(now, 'hh:mm A [GMT]Z', true)}</h1>
                <h1>{date.format(now, pattern)}</h1>
                <h1>{date.format(now, 'DD MM YYYY:HH:mm:ss')}</h1>
            
            </div>
        );
    }
}

export default ClockOne;