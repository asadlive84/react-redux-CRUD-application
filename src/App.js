import React, { Component } from 'react'


import PostFom from './components/PostFom'
import AllPost from './components/AllPost'


export class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3>React+Redux Blog Application</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <PostFom/>
          </div>
          <div className="col-md-6">
          <AllPost/>
          </div>
    
       
        
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>&copy; {new Date().getFullYear()} Asaduzzaman Sohel</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
