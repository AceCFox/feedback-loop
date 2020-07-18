import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class Form extends Component {
    render() {
      return (
          <div>
              <h3>Begin your feedback survey...</h3>
              <Link to="/Feeling">
                  <Button 
                    variant = "contained"
                    size = "large"
                    color = "primary">
                        Begin
                  </Button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default Form;