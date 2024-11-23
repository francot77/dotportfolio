import { useState } from "react";
import { disableScroll, enableScroll, scrollToElement } from "../utils/functs";

function Footer(){   

    const [modal,setModal]= useState(false)
    return <footer className="snapsection" id="foot">
        <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center"}}>
        <button id="footbutton" onClick={()=>{
            setModal(true)
            scrollToElement("foot")
            disableScroll()
        }}>Don't press me 🔞</button>
        </div>
        <div style={{textAlign:"center"}}>
        <h3>
        Developed by Franco Treboux
        </h3> <h4>aka Skanus
            </h4>
        </div>
        {modal?<div id="modalend" >
        <div className="centerdiv">
        <img alt="dagercito" src='./dagersito4.webp' className='aboutimg'id="aimg4"/> 
        </div>
        <div className="centerdiv" style={{flexDirection:"column",color:"whitesmoke"}}>
            <h1>Gracias por todo lo que haces por la comunidad!</h1>
            <h3>y por todos los jajas</h3>
            <h5>Salu2!</h5>
            <button onClick={()=>{
                setModal(false)
                enableScroll()
               }}>Cerrar</button>
        </div>
        </div>:null}
            </footer>
}

export default Footer;