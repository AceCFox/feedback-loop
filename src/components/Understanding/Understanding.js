import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Understanding extends Component {

    state ={understanding: 1}

    setUnderstanding= () =>{
        console.log('setting understanding:', this.state.understanding)
         this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
    }//end setUnderstanding
    
    render() {
      return (
          <div>
              <h3>How well are you understanding the content?</h3>
              <select id="understanding" name="understanding"
              onChange={(e) => this.setState({understanding: e.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
              </select>
              <Link to="/support">
                  <button onClick={this.setUnderstanding}>Next</button>
              </Link>
          </div>
        );//end return
    }//end render
}//end class
  
export default connect()(Understanding);