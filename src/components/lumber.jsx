import { useState } from "react";
import { disableScroll, enableScroll, scrollToElement } from "../utils/functs";

function Lumber(){
    const [modal,setModal] = useState(false)
    return <div id="lumber" style={{display:"flex", justifyContent:"center",alignItems:"center",marginBottom:"0.5em"}}>
        <button onClick={()=>{setModal(!modal)
            scrollToElement("lumber")
            disableScroll()
        }} style={{color:"white",margin:"0 auto",fontSize:"50px",background:"none",borderRadius:"15px"}}>🪓</button>
    {modal?<div style={{position:"absolute", width:"100vw",height:"100vh", backgroundColor:"black",alignItems:"center",zIndex:999,display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <iframe id="lumberiframe" title="LumberJack"   src="https://tbot.xyz/lumber/" style={{border:"none"}}/>
            <button onClick={()=>{
                setModal(false)
                enableScroll()
                }} style={{width:"30%"}}>Close</button>
        </div>:null}
        
    </div>
}

export default Lumber;