import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Feeling extends Component {
    render() {
      return (
          <div>
              <h3>Success!</h3>
              <p>Thank you for submitting your daily feedback!</p>
              {/* The button below will link us back to Form to
               begin feedback survey again*/}
              <button><Link to="/">Leve more feedback</Link></button>
          </div>
        );//end return
    }//end render
 }//end class
  
export default Feeling;