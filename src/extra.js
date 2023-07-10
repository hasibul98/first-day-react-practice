import React from "react";
import  ReactDOM  from 'react-dom';

class Clock extends React.Component{
    render(){
        return(
            <h1 className="heading">
                <span className="text">hello {new Date().toLocaleDateString()} </span>
            </h1>
        );
    }
}
export default Clock;