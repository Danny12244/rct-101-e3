import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
const link = <a />;


const Navbar = () => {
  const [isAuth,logout]=useContext(AuthContext)
  // console.log(isAuth);
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to='/'>Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
