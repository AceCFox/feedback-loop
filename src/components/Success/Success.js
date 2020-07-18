import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Feeling extends Component {
    resetFeedback = () =>{
        console.log('in resetFeedback');
        this.props.dispatch({type: 'RESET'});
    }//end resetFeedback

    render() {
      return (
          <div>
              <h3>Success!</h3>
              <p>Thank you for submitting your daily feedback!</p>
              {/* The button below will link us back to Form to
               begin feedback survey again
            
                -It will also reset the reduxState of all reducers*/}
              <Link to="/">
                  <button  onClick ={this.resetFeedback}>Leave new feedback</button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Feeling);