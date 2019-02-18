import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';

export class signIn extends Component {
  state = {
    email : '',
    password : ''
  }
  handelChanges = (e) => {
      this.setState({
          [e.target.id] : e.target.value
      })
  }
  handelSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state);
  }
  render(){
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to={'/'} />
    return (
      <div className="container">
         <div className="row">
           <div className="col s12">
              <form onSubmit={this.handelSubmit} className="section">
                  <h5 className="grey-text text-darken-3">Sign In</h5>
                  <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input id="password" type="password" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">Login</button>
                      <div className="red-text center">{ authError ? <p>{ authError }</p> : null }</div>
                  </div>
              </form>
            </div>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credetials) => dispatch(logIn(credetials))
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(signIn)
