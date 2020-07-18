import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

class Review extends Component {
    render() {
      return (
          <div>
              <h3>Review your feedback:</h3>
              <ul>
                    <li>Feelings will go here</li>
                    <li>Support will go here</li> 
                    <li>Understanding will go here</li>
                    <li>Comment will go here</li>
              </ul>
              <Link to="/success"><button>Submit Feedback</button></Link>
          </div>
        );//end return
    }//end render
 }//end class
  
//export default connect(Review); 
export default Review;