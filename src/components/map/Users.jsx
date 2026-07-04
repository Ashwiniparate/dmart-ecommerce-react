import { useState } from "react";


function User(){
    const [state,setState] = useState([
       "Teja","rohan","shradha","etha","jeniffer","ash","nancy","rubina","komal","praje","dipika",
    ]);
        return (
            
             <div>
               {
                 state.map(function(user){
                    return (
                        <div>
                            <p>{user}</p>
                            
                            </div>
                    );
                 })
               }
            </div>
            
            
            
            
            // <div>
            //    {
            //      state.map(function(user){
            //         return <h1>{user}</h1>
            //      })
            //    }
            // </div>
     );
}

export default User;