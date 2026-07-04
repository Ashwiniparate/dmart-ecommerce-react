import { useState } from "react";
import B from "./B";
import "./context.css";
import MyContext from "./Context"; 

function A(){
    const [state,setState] = useState("I am A-Data")
    return(
        <div className="A">
            <h1>A component</h1>
            <button onClick={()=>
                setState("Hii D nice to see u i am new data")
            }>change Data</button>
            <br/>
            <hr/>
            <br/>
        
            <MyContext value={state}>
                 <B />
            </MyContext>
        </div>
    );
}

export default A;