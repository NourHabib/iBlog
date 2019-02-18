import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { newUser } from '../../store/actions/authAction';

export class SignUp extends Component {
  state = {
    email : '',
    password : '',
    firstName : '',
    lastName: ''
  }
  handelChanges = (e) => {
      this.setState({
          [e.target.id] : e.target.value
      })
  }
  handelSubmit = (e) => {
      e.preventDefault();
      this.props.newUser(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <div className="row">
           <div className="col s12">
              <form onSubmit={this.handelSubmit} className="section">
                  <h5 className="grey-text text-darken-3">Sign Up</h5>
                  <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input id="password" type="password" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <label htmlFor="firstName">First Name</label>
                      <input id="firstName" type="text" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input id="lastName" type="text" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">Signup</button>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    newUser: (userInfo) => {
      dispatch(newUser(userInfo))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
 