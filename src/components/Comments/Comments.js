import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

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
              <h3>Any comments you want to leave?</h3>
              <TextField
                label="comments"
                multiline
                rowsMax="8"
                onChange={this.handleChange}
                margin="normal"
                helperText="comments are optional"
                variant="outlined"
                />
              
              <br/>
              <br/>
              <Link to="/support">
                <button>Back</button>
              </Link>
              <Link to="/review">
                  <button onClick={this.setComment}>Review Feedback</button>
              </Link>
          </div>
        );//end return
    }//end render
}//end class
  
export default connect()(Comment);