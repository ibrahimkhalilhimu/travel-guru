import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Image/Logo.png'
import './NavBar.css'

const NavBar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container fixed-top">
           <nav className="navbar navbar-expand-lg navbar-light navbar bg-dark">
   <Link className="navbar-brand" to="home">
      <img  src={logo} alt=""/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse nav" id="navbarSupportedContent">
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-4" type="search" placeholder="Search your Destination" aria-label="Search"/>
     
    </form>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="News">News </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Destination">Destination</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link " to="Blog" >Blog</Link>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link " to="Contact" >Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link login" to="login" >Login</Link>
      </li>
      <li className="nav-item">
    <h5 className="nav-link  text-white" to="Contact" >{loggedInUser.displayName}</h5>
      </li>
    </ul>
    
  </div>
</nav>
            
        </div>
    );
};

export default NavBar;