import React, { Component } from 'react';

import {connect} from 'react-redux';
import {ADD_POST} from '../reducer/postReducer'

export class PostFom extends Component {


    handleSubmit = e => {
        e.preventDefault();
        const title = this.getTitle.value
        const message = this.getMessage.value

        const payload = {
            id:new Date(),
            
            title,
            message,
            editing:false,
        }
        
        this.props.dispatch({
            type:ADD_POST,
            payload,
        })

      


        this.getTitle.value = ''
        this.getMessage.value = ''
        
    }

   
    


    render() {
        
        console.log(this.props.posts);
        
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter Post Title" ref= {(input) => this.getTitle = input } /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter Post" ref= {(input) => this.getMessage = input } /><br /><br />
                    <button>Post</button>
                </form>
                
            </div>
        )
    }
}



const mapStateToProps=(state)=>{
    return {
        posts:state,
    }
}


export default connect(mapStateToProps)(PostFom)
