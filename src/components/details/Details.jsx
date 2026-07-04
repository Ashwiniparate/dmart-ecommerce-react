import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function Details(){
 const  {name,city} = useSelector((store)=>{
        return store;
    });
    return(
        <div style={{padding:"70px"}}>
            <h1 style={{color:"purple"}}>Details Components</h1><br/>
            <dl>
                <dt style={{fontSize:"24px"}}>User name</dt>
                <dd>{name}</dd><br/>

                <dt style={{fontSize:"24px"}} >City</dt>
                <dd>{city}</dd>
            </dl>
        </div>
    )
};

export default Details;