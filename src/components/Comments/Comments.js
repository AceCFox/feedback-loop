import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    render() {
      return (
          <div>
              <h3>Comments:</h3>
          </div>
        );//end return
    }//end render
}//end class
  
export default connect()(Comments);