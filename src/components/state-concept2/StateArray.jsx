import { useState } from "react";


function StateArray(){

    const [state,setState]=useState(["hyd","kashmir","rajasthan","pune","banglore"]);
   
    function UpdateCities(){
    //    setState(["kerla",
    //     "nepal",
    //     "goa",
    //     "uttarpradesh",
    //     "pujab"])

        
           const newState = [...state];
  newState[1] = "mumbai";//changing kashmir to mumbai
  setState(newState);
    }

    return(
        <div style={{padding:"30px"}}>
            <h1>Array data inside the state</h1>
            <ol style={{margin:"20px"}}>
                <li>{state[0]}</li>
                <li>{state[1]}</li>
                <li>{state[2]}</li>
                <li>{state[3]}</li>
                <li>{state[4]}</li>
            </ol>

            <button onClick={UpdateCities}>Update cities</button>
        </div>
    )
}
export default StateArray;