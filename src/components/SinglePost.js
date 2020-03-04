import React, { Component } from 'react'

import {connect} from 'react-redux'

import {DELETE_POST, EDIT_POST} from '../reducer/postReducer';

export class SinglePost extends Component {
    render() {
        return (
            <div style={myStyle}>
                <h3>{this.props.post.title}</h3>
                <i>{this.props.post.dateNtime}</i>
                <p>{this.props.post.message}</p>
                <div>
                    <button onClick={()=>this.props.dispatch({type:EDIT_POST,  id:this.props.post.id})}>Edit</button>
                    <button onClick={()=>this.props.dispatch({type:DELETE_POST, id:this.props.post.id})}>Delete</button>
                </div>
            </div>
        )
    }
}


const myStyle={
    background:'#ccc',
    margin:'10px',
    borderBottom:'2px solid black',
    padding:'10px'
}

// const mapStateToProps=(state)=>{
//     return{

//     }
// }

export default connect()(SinglePost)
