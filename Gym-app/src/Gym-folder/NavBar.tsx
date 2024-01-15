
const NavBar = () => {
    const name = [ 
        {
        id:1,
        name:'Join'
    },
    ]
    
   return(
    <div>
        {name.map((links:any) =><h3>{links.name}</h3>)}
    </div>
   )
}
export default NavBar;