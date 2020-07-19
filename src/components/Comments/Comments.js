import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class Comment extends Component {
   
state = {comment: ''}

componentDidMount(){
    //if we are navigating back to this page, this will reflect our saved progress
    if(this.props.reduxState.commentReducer){
        this.setState({comment: this.props.reduxState.commentReducer})
    }//end if
}//end didMount

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
                value = {this.state.comment}
                />
              
              <br/>
              <br/>
              <Link to="/support">
                <Button variant="contained" onClick={this.setComment}>
                    <NavigateBeforeIcon/>
                    Back
                </Button>
              </Link>
              {'\u00A0'} {'\u00A0'} {'\u00A0'}
              <Link to="/review">
                  <Button variant="contained" color="primary" onClick={this.setComment}>
                        Review Feedback
                        <NavigateNextIcon/>
                  </Button>
              </Link>
          </div>
        );//end return
    }//end render
}//end class
  
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Comment);