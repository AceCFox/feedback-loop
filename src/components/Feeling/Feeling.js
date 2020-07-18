import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Feeling extends Component {
    render() {
      return (
          <div>
              <h3>How were you feeling today?</h3>
              <select id="feeling" name="feeling">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" selected>5</option>
              </select>
              <Link to="/understanding"><button>Next</button></Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default Feeling;