import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterList from './components/CounterList';

class App extends React.Component {
  state = {
    counter: 0,
    counterList: [1,2,3]
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

  handleCounterList () {
    let newNum = this.state.counterList
    newNum.push(this.state.counter);
    this.setState({
      counterList: newNum
    })
  }

  render (){
    const {
      counter,
      counterList
    } = this.state;

    return (
      <div className="App">
        <Counter 
          counter={counter}
          onCounterAdd={() => this.handleCounterAdd()}
          onCounterSubstract={() => this.handleCounterSubstract()}
        />
        <CounterList
          counter={counter}
          counterList={counterList}
          onCounterList={() => this.handleCounterList()}
        />
      </div>
    )
  }
}
export default App;
