import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    // Inherit data from parent component
    super(props);
    this.state = {
      deadline: 'December 31, 2018',
      newDeadline: ''
    };
  }
  
  changeDeadline() {
    this.setState({deadline: 'November 25, 2018'});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown set to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl className="deadlineInput" placeholder="New date" onChange={event => this.setState({newDeadline: event.target.value})} />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
