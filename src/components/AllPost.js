import React, { Component } from 'react'

//<SinglePost post={post}/> 

import {connect} from 'react-redux';
import SinglePost from './SinglePost';
import EditPost from './EditPost';

export class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts </h1>
                {this.props.posts.map( post => (
                <div key={post.id}>
                    
                    {post.editing ? <EditPost post={post}/>:<SinglePost post={post}/>}
                    
                </div>))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        posts:state,
    }
}

export default connect(mapStateToProps)(AllPost)
