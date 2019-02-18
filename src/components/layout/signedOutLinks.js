import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/signin">LogIn</NavLink></li>
            <li><NavLink to="/signup">SignUp</NavLink></li>
        </ul>
    )
}


export default SignedOutLinks;