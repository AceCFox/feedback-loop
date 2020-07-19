import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


class Feeling extends Component {

    state = {feeling: 5}

    componentDidMount(){
        //if we are navigating back to this page, this will reflect our saved progress
        if(this.props.reduxState.feelingReducer){
            console.log('getting stored feeling', this.props.reduxState.feelingReducer);
            this.setState({feeling: this.props.reduxState.feelingReducer})
        }//end if
    }//end didMount

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
            value = {this.state.feeling}
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
                  <Button variant = "contained" 
                          color = "primary"
                          onClick={this.setFeeling}>
                              Next
                              <NavigateNextIcon/>
                    </Button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
const putReduxStateOnProps = (reduxState) => ({ reduxState }) 
export default connect(putReduxStateOnProps)(Feeling);