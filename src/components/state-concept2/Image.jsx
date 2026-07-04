import { useState } from "react";
import "./Image.css";

function Image(){
        const [url,setUrl]  = useState("https://tse2.mm.bing.net/th/id/OIP.gdNVfcnAjQURwqcuGIDHAQHaE8?pid=Api&h=220&P=0");//sameimg Flower


         function changeToNature(){
                 setUrl("https://tse2.mm.bing.net/th/id/OVP.hAOyGEQ7SzJmFWvSaMsMtQHgFo?pid=Api&h=360&w=480&c=7&rs=1")
         }
    

         function changeToFlower(){
                     setUrl("https://tse2.mm.bing.net/th/id/OIP.gdNVfcnAjQURwqcuGIDHAQHaE8?pid=Api&h=220&P=0")//sameimg Flower
         }

    return(
        <div className="image" >
            <img src={url} alt="" width="500" height="300"/><br/> <br/>
            <button onClick={changeToFlower}>Flower</button>
            <button onClick={changeToNature}>Nature</button>
        </div>
    );
}

export default Image;