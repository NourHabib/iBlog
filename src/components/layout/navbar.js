import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
   const { auth, profile } = props;
   const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks /> ;
    return(
        <div className="navbar-fixed">
            <nav className=" grey darken-3">
                <div className="nav-wrapper container">
                <Link to='/' className="brand-logo"><span className="pink-text text-lighten-1">i</span>Blog</Link>
                { links }
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);