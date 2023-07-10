import React from 'react';
import './App.css';
import './extra.js';
import Clock from './extra.js';
import ClockOne from './clock';
import NewClockOne from './newClock';


function App(props) {

  return (

    <div className="App">

     <Kat title="it is big title" />
     <Clock />
     <ClockOne />
     <NewClockOne locale="bn-BD"/>
    </div>
  );
}
// var style={
//   color:'red',
//   backgroundColor:"green"
// }

function Kat(props){
let fname = 'hasibul';
let lname = 'hossani';
let text = "i am a super heading";
// let myId = document.querySelector('#inner');
let mybtn= ()=>{
  document.querySelector('#inner').innerHTML =  text;
  // document.querySelector('#inner').innerHTML =  "";
  
  // document.querySelector('#inner').innerHTML = "<br> i am a heading </br>" ;
 console.log('always clik me');
  
//  console.log(document.querySelector('#inner').innerHTML += "<br> i am a heading </br>");
}
  return(
    <div>
      <button >change</button>
     <h1 className='demo' >{props.title}</h1>
     <h2>i eat rice</h2>
     <p>this is a paragraph</p>
     <h1>{fname}  {lname}</h1>
     <button id='firstbutn' onClick={()=>mybtn()}>on click here</button>
     <h2 id='inner'></h2>
     
  </div>
  );
}

export default App;
