import { useState } from "react";
import MenuIcon from "../icons/menu";

const routes = [{
    title:"Home",
    path:"#home"
}, {
    title:"About",
    path:"#aboutme"
},{
    title:"Experience",
    path:"#experience"
},
{
    title:"Contact",
    path:"#contact"
}
]

function NavBar() {
    const [isOpen,setIsOpen] = useState(false)

    function handleClick(){
        setIsOpen(!isOpen)
    }
  return (<>
    <nav className="navbar">
        {routes.map(rt=>{
            return <div className="navlink"><a className="anchornav" href={rt.path}>{rt.title}</a></div>
        })}
    </nav>
    <nav className="responsiveNav" style={{border:`${isOpen?"1px solid gray":""}`,backgroundColor:`${isOpen?"black":""}`,boxShadow:`${isOpen?"0px 0px 15px 3px #5A009B":""}`}}>
        {!isOpen?<MenuIcon funct={handleClick}/>:null}
    {isOpen?
    <div id="rnavContainer">
        {routes.map(rt=>{
            return <div  className="navlink"><a className="anchornav" onClick={()=>{setIsOpen(false)}} href={rt.path}>{rt.title} </a></div>
        })}
        <button style={{margin:"0.3em", alignSelf:"center"}} onClick={()=>{setIsOpen(false)}}>X</button>
    </div>
    :null}
    </nav>
        </>
  );
}

export default NavBar;
