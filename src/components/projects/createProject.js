import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';

export class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handelChanges = (e) => {
      this.setState({
          [e.target.id] : e.target.value
      })
  }
  handelSubmit = (e) => {
      e.preventDefault();
      this.props.createProject(this.state);
      this.props.history.push('/');
  }
  render(){
    const { auth } = this.props;
    if(!auth.uid){
      return <Redirect to={'/signIn/'} />
    }else{
      return (
        <div className="container">
         <div className="row">
           <div className="col s12">
            <form onSubmit={this.handelSubmit} className="section">
                  <h5 className="grey-text text-darken-3">Create new project</h5>
                  <div className="input-field">
                      <label htmlFor="title">Project title</label>
                      <input id="title" type="text" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <label htmlFor="content">Project content</label>
                      <textarea id="content" className="materialize-textarea" onChange={this.handelChanges}/>
                  </div>
                  <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">Create</button>
                  </div>
              </form>
           </div>
         </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => {
      dispatch(createProject(project))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
