
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
  return (
    <nav className="navbar">
        {routes.map(rt=>{
            return <div className="navlink"><a className="anchornav" href={rt.path}>{rt.title}</a></div>
        })}
    </nav>
  );
}

export default NavBar;
