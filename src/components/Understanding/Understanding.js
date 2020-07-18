import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Understanding extends Component {

    state ={understanding: 5}

    setUnderstanding= () =>{
        console.log('setting understanding:', this.state.understanding)
         this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
    }//end setUnderstanding
    
    render() {
      return (
          <div>
              <h3>How well are you understanding the content?</h3>
              <h5><i>1 = worst, 5 = best</i></h5>
          <FormControl required className='formControl'>
          <Select
            onChange={(e) => this.setState({understanding: e.target.value})}
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
              <Link to="/feeling">
                <button>Back</button>
              </Link>
              <Link to="/support">
                  <button onClick={this.setUnderstanding}>Next</button>
              </Link>
          </div>
        );//end return
    }//end render
}//end class
  
export default connect()(Understanding);