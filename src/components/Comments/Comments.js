import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Comment extends Component {
   
state = {comment: ''}

handleChange = (event) =>{
   // console.log(event.target.value)
    this.setState({comment: event.target.value});
}//end handleChange

setComment= () =>{
    console.log('setting comment:', this.state.commemt)
    this.props.dispatch({ type: 'SET_COMMENT', payload: this.state.comment })
}//end setComment


    render() {
      return (
          <div>
              <h3>Do you have any comments you want to leave?</h3>
              <textarea id="comments" rows = "8" cols = "20"
              onChange = {this.handleChange}></textarea>
              <br/>
              <br/>
              <Link to="/review">
                  <button onClick={this.setComment}>Review Feedback</button>
              </Link>
          </div>
        );//end return
    }//end render
}//end class
  
export default connect()(Comment);