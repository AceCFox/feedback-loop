import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Support extends Component {

    state ={support: null}

    setSupport= () =>{
        console.log('setting support:', this.state.support)
         this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
    }//end setSupport
    
    render() {
      return (
          <div>
              <h3>How well did you feel supported today?</h3>
              {/* onChange calls an anonymous function to set state to target value so we can save it */}
              <select id="support" name="support" onChange={(e) => this.setState({support: e.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" defaultValue>5</option>
              </select>
              <Link to="/comments">
                  <button onClick={this.setSupport}>Next</button>
              </Link>
          </div>
        );//end return
    }//end render
 }//end class
  
export default connect()(Support);
//export default Support;