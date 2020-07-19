import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class Understanding extends Component {

    state ={understanding: 5}

    componentDidMount(){
        //if we are navigating back to this page, this will reflect our saved progress
        if(this.props.reduxState.understandingReducer){
            console.log('getting stored understanding', this.props.reduxState.understandingReducer);
            this.setState({understanding: this.props.reduxState.understandingReducer})
        }//end if
    }//end didMount

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
          {/*this Select is a controlled input based on state*/}
          <Select
            onChange={(e) => this.setState({understanding: e.target.value})}
            id="understanding"
            className='selectEmpty'
            value={this.state.understanding}
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
                <Button variant = "contained"
                    onClick={this.setUnderstanding}>
                        Back
                </Button>
              </Link>
              {/*the characters below are nonbreaking spaces*/}
              {'\u00A0'} {'\u00A0'} {'\u00A0'}
              <Link to="/support">
                  <Button 
                    variant = "contained"
                    color = "primary"
                    onClick={this.setUnderstanding}>
                        Next
                  </Button>
              </Link>
          </div>
        );//end return
    }//end render
}//end class
  
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Understanding);