import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                <Button variant="contained">Back</Button>
              </Link>
              <Link to="/review">
                  <Button variant="contained" color="primary" onClick={this.setComment}>Review Feedback</Button>
              </Link>
          </div>
        );//end return
    }//end render
}//end class
  
export default connect()(Comment);