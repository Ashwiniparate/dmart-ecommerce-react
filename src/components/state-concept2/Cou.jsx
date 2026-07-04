import {useState} from "react";
import "./Cou.css";

function Cou(){
    const [state,setState] = useState(0);

    const increaseCount =()=>{
        setState(state + 1);
    };

    return(
  <div className="cou">
    <h1>Count Value is : {state}</h1>
    <button onClick={increaseCount}>count++</button>
  </div>
    )
}

export default Cou;