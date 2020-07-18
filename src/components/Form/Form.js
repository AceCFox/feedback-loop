import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';

class Form extends Component {
    render() {
      return (
          <div>
              <h3>Begin your feedback</h3>
              <Link to="/Feeling"><button>Begin</button></Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default Form;