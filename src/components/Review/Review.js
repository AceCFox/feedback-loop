import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

class Review extends Component {
    render() {
      return (
          <div>
              <h3>Review your feedback:</h3>
              <ul>
                    <li>Feelings: {this.props.reduxState.feelingReducer}</li>
                    <li>Support: {this.props.reduxState.supportReducer}</li> 
                    <li>Understanding {this.props.reduxState.understandingReducer}</li>
                    <li>Comments: {this.props.reduxState.commentReducer}</li>
              </ul>
              <Link to="/success"><button>Submit Feedback</button></Link>
          </div>
        );//end return
    }//end render
 }//end class
  
 const putReduxStateOnProps = (reduxState) => ({ reduxState })
 export default connect(putReduxStateOnProps)(Review);