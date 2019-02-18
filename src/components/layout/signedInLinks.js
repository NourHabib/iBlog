import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authAction';

const SignedInLinks = (props) => {
    return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.logOut}>LogOut</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);