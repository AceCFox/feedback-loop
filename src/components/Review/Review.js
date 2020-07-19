import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

class Review extends Component {
    

    submitFeedback = () => {
        const reduce = this.props.reduxState;

        const postObject = {
            feeling: reduce.feelingReducer,
            understanding: reduce.understandingReducer,
            support: reduce.supportReducer,
            comments: reduce.commentReducer,
        }//end postObject

        console.log(postObject)

        //axios POST to save our feedback to the database

        axios({
            method: 'POST',
            url: '/feedback',
            data: postObject,
        }).then((response)=>{
            console.log('back from POST with', response)
            this.props.history.push('/success');
        }).catch((error)=>{
            console.log('Post error:', error);
            alert('Sorry, the server encountered an error while trying to post your feedback')
        })//end axios

    }//end submitFeedback
    

    render() {
   
      return (
          <div>
              <h3>Review your feedback:</h3>
              <h3><i>1:<SentimentVeryDissatisfiedIcon/>...  5: <SentimentVerySatisfiedIcon/></i></h3>
              <ul className = "reviewList">
                    <li>Feeling: {this.props.reduxState.feelingReducer}</li>
                    <li>Understanding: {this.props.reduxState.understandingReducer}</li>
                    <li>Support: {this.props.reduxState.supportReducer}</li> 
                    <li>Comments: {this.props.reduxState.commentReducer}</li>
              </ul>
              <br/>
              <br/>
              <Link to="/comments">
                <Button variant = "contained">
                    <NavigateBeforeIcon/>
                    Back
                </Button>
              </Link>
              {'\u00A0'} {'\u00A0'} {'\u00A0'}
              <Button 
                variant = "contained"
                color = "primary" 
                onClick = {this.submitFeedback}>
                    Submit Feedback
                    <DoneAllIcon/>
              </Button>
          </div>
        );//end return
    }//end render
 }//end class
  
 const putReduxStateOnProps = (reduxState) => ({ reduxState })
 export default connect(putReduxStateOnProps)(Review);