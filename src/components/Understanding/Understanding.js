import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {
    render() {
      return (
          <div>
              <h3>Understanding</h3>
          </div>
        );//end return
    }//end render
}//end class
  
  export default connect()(Understanding);