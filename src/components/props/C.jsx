
 import D from "./D";

function C({data2}){
    return(
        <div>
            <h1>C component</h1>
             <br/>
            <hr/>
            <br/>
            <D data3={data2}/>
        </div>
    );
}

export default C;