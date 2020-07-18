import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Understanding extends Component {
    render() {
      return (
          <div>
              <h3>How well are you understanding the material?</h3>
              <select id="understanding" name="understanding">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" selected>5</option>
              </select>
              <Link to="/support"><button>Next</button></Link>
          </div>
        );//end return
    }//end render
}//end class
  
  export default Understanding;