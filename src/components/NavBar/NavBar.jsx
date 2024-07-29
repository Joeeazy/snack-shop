import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'fixed', top: '0', left: '0', width: '100%', background: 'green', padding: '10px 20px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}}>
    <NavLink to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</NavLink>
    <NavLink to="/snacks" style={{ textDecoration: 'none', color: '#fff' }}>Snacks</NavLink>
    <NavLink to="/snacks/add" style={{ textDecoration: 'none', color: '#fff' }}>Add Snacks</NavLink>
  </div>
  
  
  )
}

export default NavBar