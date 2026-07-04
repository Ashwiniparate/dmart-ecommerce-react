import { use, useRef } from "react";

function UseRefComp(){
        var h1Ref =useRef(null);//h1Ref ={current : null}
        var Pref=useRef(null);
        var inputeref=useRef(null);

        const modify=()=>{
h1Ref.current.style.color="red"
Pref.current.innerText=`Code anywhere
Code wherever you're most productive, whether you're connected to the cloud, a remote repository, or in the browser with VS Code for the Web (vscode.dev).

Built-in Source Control empowers you with Git support out-of-the-box. Many other source control providers are available through extensions.

GitHub Codespaces provides cloud-powered development environments for any activity - whether it's a long-term project, or a short-term task like reviewing a pull request.`

      Pref.current.style.backgroundColor="black"
      Pref.current.style.color="white"
      Pref.current.style.padding="50px"
      
      console.log(inputeref.current.value);
};
    return(
        <div style={{padding:"50px"}}>
            <h1 ref={h1Ref}>UseRefComponent </h1><br/>
            
            <input type="text" placeholder="username"  ref={inputeref}/><br/>
            <br/>
            <p ref={Pref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos voluptas nihil tenetur aperiam sed repellendus at iusto! Beatae consequuntur voluptate nihil voluptatum consequatur illo quam? Ab adipisci accusantium corrupti sed veniam, optio cupiditate facere, quisquam amet aperiam ullam impedit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima soluta quam earum. Obcaecati asperiores inventore deleniti. Non quidem, porro nesciunt, inventore tempore quos, doloribus expedita error exercitationem animi officiis autem quisquam amet aperiam ullam impedit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima soluta quam earum. Obcaecati asperiores inventore deleniti. Non quidem, porro nesciunt, inventore tempore quos, doloribus expedita error exercitationem animi officiis autem.</p><br/>

            <button onClick={modify}>Modify UI Design</button>
        </div>
    )

}
export default UseRefComp;