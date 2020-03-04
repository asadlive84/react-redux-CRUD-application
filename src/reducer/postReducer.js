

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const UPDATE_POST= 'UPDATE_POST'


const postReducer = (state = [], action)=>{

    switch(action.type){
        case ADD_POST:
            return state.concat([action.payload]);
        case DELETE_POST:
            return state.filter(post => post.id !== action.id) 
        case EDIT_POST:
            return state.map(post => post.id === action.id?{...post, editing:!post.editing}:post)
        case UPDATE_POST:
            return state.map(post => {
                if(post.id === action.id){
                    return{
                        ...post,
                        title:action.data.newTitle,
                        message:action.data.newMessage,
                        editing:!post.editing,
                    }
                }
                else return post;
            })
        default:
            return state;
    }

}


export default postReducer;