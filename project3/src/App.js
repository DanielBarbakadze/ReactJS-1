import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterList from './components/CounterList';
import CounterListSorted from './components/CounterListSorted';
import CounterInput from './components/CounterInput';
class App extends React.Component {
  state = {
    counter: 0,
    counterList: []
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

  handleCounterListClear () {
    this.setState({
      counterList: [],
      counterListSorted: []
    })
  }

  handleCounterListSorted () {
    this.setState({
      counterList: this.state.counterList.sort((a,b) => a-b)
    })
  }

  handleCounterInput (num) {
    this.setState({
      counterList: this.state.counterList.filter(number => number !== num)
    })
  }

  render (){
    const {
      counter,
      counterList,
      counterListSorted
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
          onCounterListClear={() => this.handleCounterListClear()}
        />
        <CounterListSorted
          onCounterListSorted={() => this.handleCounterListSorted()}
        />
        <CounterInput
          onCounterInput={(num) => this.handleCounterInput(num)}
        />
      </div>
    )
  }
}
export default App;
