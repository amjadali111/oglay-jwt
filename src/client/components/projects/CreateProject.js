import React, { Component } from 'react';
import { connect } from 'react-redux';
import createProject from '../../store/actions/projectActions';

export class CreateProject extends Component {
    
   
    constructor(props){
        super(props);
        
        this.state={
            title:'',
            content:''
          }

        // this.handleChange=this.handleChange.bind(this); 
        // this.handleSubmit=this.handleSubmit.bind(this); 
    }

    handleChange = (element) => {
        this.setState({
            [element.target.id] : element.target.value
        })
    }
   
    handleSubmit = (formElement) => {
        
        formElement.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
    }
    
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                   <br/><br/>
                    <div className="input-field col s6">
                        <input type="text" id="title" onChange={this.handleChange}/>
                        <label className="active" htmlFor="title">TITLE</label>
                    </div>
                    <div className="input-field col s6">
                        <label className="active" htmlFor="content">CONTENT</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-control">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createProject: (project) => dispatch(createProject(project)) // here dispatch is a middleware
    }
}
//first parameter is null because first parameter of connect is always mapStateToProps
export default connect(null,mapDispatchToProps)(CreateProject)
