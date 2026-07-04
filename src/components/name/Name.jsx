import { useRef } from "react";
import {useDispatch} from "react-redux";
function Name(){
    const dispatch =  useDispatch();
    const inputref = useRef();
    const getData=()=>{
           const action={
            type:"name",
            payload:inputref.current.value,
           };
        dispatch(action);
    };
    return(
        <div style={{padding:" 50px 100px"}}>
            <h1 style={{color:"green"}}>Name component</h1><br/>
            <input ref={inputref} type="text" placeholder="enter name" />
            <button onClick={getData}>Submit</button>
        </div>
    )
};

export default Name;