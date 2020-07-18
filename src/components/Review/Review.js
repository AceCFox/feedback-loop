import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

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
    }
    

    render() {
   
      return (
          <div>
              <h3>Review your feedback:</h3>
              <ul className = 'reviewList'>
                    <li>Feelings: {this.props.reduxState.feelingReducer}</li>
                    <li>Understanding {this.props.reduxState.understandingReducer}</li>
                    <li>Support: {this.props.reduxState.supportReducer}</li> 
                    <li>Comments: {this.props.reduxState.commentReducer}</li>
              </ul>
              <Link to="/success">
                  <button onClick = {this.submitFeedback}>Submit Feedback</button>
                </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
 const putReduxStateOnProps = (reduxState) => ({ reduxState })
 export default connect(putReduxStateOnProps)(Review);