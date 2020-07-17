import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
    render() {
      return (
          <div>
              <h3>Feeling:</h3>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Feeling);