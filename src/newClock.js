import React from "react";
import { ReactDOM } from "react-dom";


class NewClockOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    // componentDidMount(){
    //    this.clockTimer = setInterval(()=>this.tick(),1000);
        
    // }
    tick(){
        this.setState({
            date: new Date(),
        });
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
   
    render(){
        let pen = "aplle";
        const date = require('date-and-time');
        const now = new Date();
        const pattern = date.compile('HH:mm:ss, MMM DD YYYY');
        let handeleClick = ()=>{
            document.querySelector('#handleId').innerHTML='it is handle h2';
            console.log('always clik me');
        }
        return(
            
            <div>
                <h2>it is secound block {pen}</h2>
                {/* <h1>{this.state.date.toLocaleTimeString(this.props.locale)}</h1> */}
                <h1>{this.state.date.toLocaleTimeString("bn-BD")}</h1>
                <h1>{Date()}</h1>
                <h2>{ Date()}</h2>
                <h2>{date.format(now, 'YYYY/MM/DD HH:mm:ss')}</h2>
                <h1>{date.format(now, 'ddd, MMM DD YYYY')}</h1>
                <h1>{date.format(now, 'hh:mm A [GMT]Z')}</h1>
                <h1>{date.format(now, 'hh:mm:ss A [GMT]Z', true)}</h1>
                <h1>{date.format(now, pattern)}</h1>
                <h1>{date.format(now, 'DD MM YYYY:HH:mm:ss')}</h1>
            <button onClick={()=>handeleClick()}>click here</button>
            <h2 id="handleId"></h2>
            </div>
        );
    }
   
}
export default NewClockOne;