
import C from "./C";

function B({data1}){
    return(
        <div>
            <h1>B component </h1>
             <br/>
            <hr/>
            <br/>
           <C data2={data1}/>
        </div>
    );
}

export default B;