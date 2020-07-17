import React, { Component } from 'react';
import {connect} from 'react-redux';

class Review extends Component {
    render() {
      return (
          <div>
              <h3>Review:</h3>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Review);