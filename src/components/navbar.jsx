import { useState } from "react";
import MenuIcon from "../icons/menu";

const routes = [{
    title:"Home",
    path:"#home"
}, {
    title:"About",
    path:"#aboutme"
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
    <nav className="responsiveNav">
        {!isOpen?<MenuIcon funct={handleClick}/>:null}
    {isOpen?
    <div>
        {routes.map(rt=>{
            return <div className="navlink"><a className="anchornav" href={rt.path}>{rt.title}</a></div>
        })}
    </div>
    :null}
    </nav>
        </>
  );
}

export default NavBar;
