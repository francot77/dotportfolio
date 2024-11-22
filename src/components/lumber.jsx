import { useState } from "react";
function Lumber(){
    const [modal,setModal] = useState(false)
    
    function scrollToElement() {
        const element = document.getElementById('lumber');
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 10);
      }
    return <div id="lumber" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        <button onClick={()=>{setModal(!modal)
            scrollToElement()
        }} style={{color:"white",margin:"0 auto",fontSize:"50px",background:"none",borderRadius:"15px"}}>🪓</button>
    {modal?<div style={{position:"absolute", width:"100vw",height:"100vh", backgroundColor:"black",alignItems:"center",zIndex:999,display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <iframe title="LumberJack" width={800} height={600} src="https://tbot.xyz/lumber/" style={{border:"none"}}/>
            <button onClick={()=>setModal(false)} style={{width:"30%"}}>Close</button>
        </div>:null}
        
    </div>
}

export default Lumber;