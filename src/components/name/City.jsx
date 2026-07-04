import { useRef } from "react";
import { useDispatch } from "react-redux";

function City(){
    const cityRef = useRef();
    const dispatch = useDispatch();
 
    const getCity = ()=>{
           const cityAction = {
            type:"city",
            payload:cityRef.current.value,
           };
          dispatch(cityAction);
        }

    return(
      <div style={{padding:"10px 100px"}}>
        <h1 style={{color:"orange"}}> City </h1>
        <select ref={cityRef} onChange={getCity}>
            <option >Pune</option>
            <option >Bangluru</option>
            <option >Mumbai</option>
            <option >Rajasthan</option>
        </select>
      </div>  
    );
}

export default City;