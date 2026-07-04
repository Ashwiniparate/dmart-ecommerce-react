import "./props.css";
import { useState } from "react";
import Display from "./Display";

function Text(){
    const [state,setState] = useState("Hello React ,how are u react!");
    return(
        <div className="text">
            <h1>Text Component</h1>
            <button onClick={()=>{
                setState("React JS Library")
            }}>Update</button>
            <Display data={state}/>
        </div>
    );
}
export default Text;