import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Feeling extends Component {

    state = {feeling: 1}

    setFeeling= () =>{
        console.log('setting support:', this.state.feeling)
         this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feeling })
    }//end setFeeling

    render() {
      return (
          <div>
              <h3>How are you feeling today?</h3>
              <select id="feeling" name="feeling"
              onChange={(e) => this.setState({feeling: e.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
              </select>
              <Link to="/understanding">
                  <button onClick={this.setFeeling}>Next</button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Feeling);