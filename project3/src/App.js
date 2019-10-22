import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  state = {
    counter: 0
  }
  render (){
    return (
      <div className="App">
        <Counter counter={this.state.counter} />
      </div>
    )
  }
}
export default App;
