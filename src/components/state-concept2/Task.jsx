import {useState} from "react";
import "./Task.css";
import { changeToNewZeland } from "./Task";
import { changeToKorea } from "./Task";
import { changeToJapan } from "./Task";
import { changeToParis } from "./Task";
import { changeToRussia } from "./Task";

function Task(){
        const [url,setUrl] = useState("https://tse3.mm.bing.net/th/id/OVP.DY8oRTveJCGbZAEXL-t5_gHgFo?pid=Api&h=360&w=480&c=7&rs=1" );
         const [heading,setHeading] =useState("Tour To World");
         const [paragraph,setParagraph] = useState(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error dolore, quos veniam doloremque eum qui impedit commodi inventore beatae sit repudiandae eveniet, itaque quia voluptas enim tempore molestias nesciunt necessitatibus eaque. Quis ad perferendis molestiae deserunt hic praesentium impedit vel! Itaque similique beatae laborum laboriosam. Assumenda cupiditate molestias, vel, similique praesentium sequi voluptate facilis blanditiis reprehenderit distinctio maxime esse quasi consequatur architecto illum laudantium saepe, deleniti velit officiis animi quaerat mollitia sint amet! Quia explicabo eligendi cum laboriosam quis nulla reprehenderit beatae, consequuntur quaerat laudantium cumque debitis, ut eius. Consequuntur culpa ad odio adipisci eligendi, voluptas repudiandae necessitatibus harum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea veritatis libero, placeat consequatur amet sapiente suscipit eaque ipsa, iure nisi aperiam. In, facere quos veritatis dolorem ducimus fugiat recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint accusantium corrupti, quo nesciunt id at incidunt quos ducimus? Voluptatem.`);


    return(
        <div className="task">
         <div>
         <img src={url} width={"100%"} height={350} alt="" />
         </div>
            <div className="content">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
                    <button   style={{ backgroundColor: "green", color: "white" }} onClick={()=>{
                        changeToNewZeland(setUrl,setHeading,setParagraph)
                    }} >NewZeland</button>
                    
                    <button style={{backgroundColor:"blue", color:"white"}} onClick={()=>{
                        changeToKorea(setUrl,setHeading,setParagraph)
                    }}>Korea</button>
                    
                    <button  style={{backgroundColor:"purple", color:"white"}} onClick={()=>{
                        changeToJapan(setUrl,setHeading,setParagraph)
                    }}>Japan</button>
                   
                    <button  style={{backgroundColor:"red", color:"white"}} onClick={()=>
                        changeToParis(setUrl,setHeading,setParagraph)
                    }>Paris</button>
                  
                    <button  style={{backgroundColor:"orange", color:"white"}} onClick={()=>
                        changeToRussia(setUrl,setHeading,setParagraph)}>Russia</button>
               </div>
        </div>
    )
}
export default Task;