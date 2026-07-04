import { useState } from "react";

function RenderData(){
    // const [state,setState]=useState([10,20,30]);
        const [state,setState]=useState([
        <h3>i am h1</h3>,
        <p>I Am para</p>,
        <div>I am div element</div>
    ]);
    return(
        <div>
            <h1>Render Data</h1>
            {state}
        </div>
    );
}
export default RenderData;