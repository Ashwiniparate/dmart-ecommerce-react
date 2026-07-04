import {useState} from "react";
import "./Count.css";


function Count(){
      var [state,setState]  =   useState("Welcome to State Concept");//we are doing destructuring
      // state is variable  and  setState is function ....now let start concept which we writen it is store in variable means State

      function updateState(){
             setState("Now Let's Start State Concept");
      }
    return(
        <div className="count">
            <h1>{state}</h1>
            <button onClick={updateState}>Click me</button>
        </div>
    )
}
export default Count;

