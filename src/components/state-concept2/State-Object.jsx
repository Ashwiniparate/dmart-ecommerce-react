import { useState } from "react";


function StateObject(){

    const [state,setState]=useState({name:"Jungkook",city:"korea",gender:"male"});
    console.log(state);

    function Update(){
        //  setState({
        //     name:"Jeniffer",
        //     city:"india",
        //     gender:"female"
        //  }
        //  );


        setState({
            ...state,//spreade operator it store all old property name,city,gender
            city:"Mumbai",
        })



    }
    return(
        <div style={{padding:"30px"}}>
            <h1>Object data inside the state</h1>
            <ol style={{margin:"20px"}}>
                <li>{state.name}</li>
                <li>{state.city}</li>
                <li>{state.gender}</li>
            </ol>

            <button onClick={Update}>Update userData</button>
        </div>
    )
}
export default StateObject;