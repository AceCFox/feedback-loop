import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, } from 'react-router-dom';
import Form from '../Form/Form';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
        <Toolbar><h1 className="App-title">Feedback Survey</h1>
        {'\u00A0'} {'\u00A0'} {'\u00A0'}
          <h4><i>Don't forget your daily feedback</i></h4></Toolbar>
        </AppBar>
        {/* <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/> */}
        <Router>
          <Route exact path="/" component={Form} />
          <Route path ="/feeling" component={Feeling}/>
          <Route path = "/understanding" component={Understanding}/>
          <Route path = '/support' component = {Support}/>
          <Route path ='/comments' component ={Comment}/>
          <Route path = '/review' component ={Review}/>
          <Route path = '/success' component = {Success}/>
          <Route path = '/admin' component = {Admin}/>
        </Router>
      </div>
    );
  }
}

export default App;
