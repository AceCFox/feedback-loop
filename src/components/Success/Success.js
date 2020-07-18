import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Feeling extends Component {
    resetFeedback = () =>{
        console.log('in resetFeedback');
        this.props.dispatch({type: 'RESET'});
    }//end resetFeedback

    render() {
      return (
          <div>
              <h3>Success</h3>
              <p><i>Thank you for submitting your daily feedback!</i></p>
              {/* The button below will link us back to Form to
               begin feedback survey again
            
                -It will also reset the reduxState of all reducers*/}
              <Link to="/">
                  <Button
                    variant = "contained"
                    color ="primary"
                    onClick ={this.resetFeedback}>
                        Leave new feedback
                   </Button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Feeling);