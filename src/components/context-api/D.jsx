import { useContext } from "react";
import MyContext from "./Context";

function D(){
         const data = useContext(MyContext);
    return(
        <div>
            <h1>D component</h1>
            <p style={{color:"purple",padding:"10px"}}>{data}</p>
        </div>
    );
}

export default D;