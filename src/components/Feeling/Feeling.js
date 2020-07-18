import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class Feeling extends Component {

    state = {feeling: 5}

    setFeeling= () =>{
        console.log('setting support:', this.state.feeling)
         this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feeling })
    }//end setFeeling

    render() {
      return (
          <div>
              <h3>How are you feeling today?</h3>
              <h5><i>1 = worst, 5 = best</i></h5>
          <FormControl required className='formControl'>
          <Select
            onChange={(e) => this.setState({feeling: e.target.value})}
            id="feeling"
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
              
             {/*  <select id="feeling" name="feeling"
              onChange={(e) => this.setState({feeling: e.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
        </select> */}
              
              <br/>
              <br/>
              <Link to="/understanding">
                  <button onClick={this.setFeeling}>Next</button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Feeling);