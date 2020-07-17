import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {
    render() {
      return (
          <div>
              <h3>Support:</h3>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Support);