function MenuIcon(props){
    const {id,funct} = props
    return <div id={id} onClick={funct}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div> 
}

export default MenuIcon;