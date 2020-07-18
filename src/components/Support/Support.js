import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class Support extends Component {

    state ={support: 5}

    setSupport= () =>{
        console.log('setting support:', this.state.support)
         this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
    }//end setSupport
    
    render() {
      return (
          <div>
              <h3>How well are you feeling supported?</h3>
              {/* onChange calls an anonymous function to set state to target value so we can save it */}
              <h5><i>1 = worst, 5 = best</i></h5>
              <FormControl required className='formControl'>
              <Select
                onChange={(e) => this.setState({support: e.target.value})}
                id="understanding"
                className='selectEmpty'
                defaultValue = "5"
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
              <br/>
              <br/>
              <Link to="/understanding">
                <Button variant = "contained">Back</Button>
              </Link>
              <Link to="/comments">
                  <Button variant="contained" color="primary" onClick={this.setSupport}>Next</Button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Support);
