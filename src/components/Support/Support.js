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

    componentDidMount(){
        //if we are navigating back to this page, this will reflect our saved progress
        if(this.props.reduxState.supportReducer){
            this.setState({support: this.props.reduxState.supportReducer})
        }//end if
    }//end didMount

    setSupport= () =>{
        console.log('setting support:', this.state.support)
         this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
    }//end setSupport
    
    render() {
      return (
          <div>
              <h3>How well are you feeling supported?</h3>
              <h5><i>1 = worst, 5 = best</i></h5>
              <FormControl required className='formControl'>
                {/* onChange  below calls an anonymous function to set state 
                to target value so we can save it */}
                <Select
                    onChange={(e) => this.setState({support: e.target.value})}
                    id="understanding"
                    className='selectEmpty'
                    value = {this.state.support}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
              <FormHelperText>Required</FormHelperText>
              </FormControl>
              <br/>
              <br/>
              <Link to="/understanding">
                <Button variant = "contained" onClick={this.setSupport}>
                    Back
                </Button>
              </Link>
              {/*the characters below are nonbreaking spaces*/}
              {'\u00A0'} {'\u00A0'} {'\u00A0'}
              <Link to="/comments">
                  <Button variant="contained" color="primary" 
                    onClick={this.setSupport}>
                        Next
                   </Button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Support);
