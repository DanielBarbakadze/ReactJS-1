import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  state = {
    counter: 0
  }

  handleCounterAdd () {
    this.setState({
      counter: this.state.counter+1
    })
  }
  handleCounterSubstract () {
    this.setState({
      counter: this.state.counter-1
    })
  }
  render (){
    return (
      <div className="App">
        <Counter 
          counter={this.state.counter} 
          onCounterAdd={() => this.handleCounterAdd()}
          onCounterSubstract={() => this.handleCounterSubstract()}
        />
      </div>
    )
  }
}
export default App;
