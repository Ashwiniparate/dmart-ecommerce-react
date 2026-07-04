import { useState } from "react";
import B from "./B";

function A(){
    const [state,setState] = useState("A-Data")
    return(
        <div>
            <h1>A component</h1>
            <br/>
            <hr/>
            <br/>
            <B data1 = {state}/>
        </div>
    );
}

export default A;