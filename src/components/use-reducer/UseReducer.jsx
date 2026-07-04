import { act, useReducer } from "react"

const myReducer=(state,action)=>{
   
   if(action.type==="inc"){
       state = state + 1;
   }else if(action.type==="dec"){
        state = state - 1;
   }else{
    state=0;
   }
    
    return state
};

function UseReducer(){
            var [state,dispatch]=useReducer(myReducer,0);
    return(
  <div className="reducer">
    <h1>Count Value :{state}</h1><br/>
    <button onClick={()=>{
        dispatch({type:"inc"})
    }}>Increment</button>
    <button onClick={()=>{
        dispatch({type:"dec"})
    }}>Decrement</button>
    <button onClick={dispatch}>Reset</button>

  </div>
    )
}
export default UseReducer;