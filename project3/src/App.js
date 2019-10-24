import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterList from './components/CounterList';
import CounterListSorted from './components/CounterListSorted';
import CounterInput from './components/CounterInput';
import CounterOperations from './components/CounterOperations';
import { timeout } from 'q';

class App extends React.Component {
  state = {
    counter: 0,
    counterList: [],
    sum: 0,
    multiply: 0
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
    this.update()
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
      counterList: this.state.counterList.filter(number => number !== parseInt(num))
    })
    this.update()
  }

  handleCounterOperationSum () {
    let temp=0
    this.state.counterList.map(elem => temp=temp+elem)
    this.setState({
      sum: temp
    })
  }

  handleCounterOperationMultiply () {
    let temp=1
    this.state.counterList.map(elem => temp=temp*elem)
    if(this.state.counterList.length==0) temp=0
    this.setState({
      multiply: temp
    })
  }
  
  update() {
    setTimeout(() => {
      if(this.state.sum!=0){
        this.handleCounterOperationSum()
      }
      if(this.state.multiply!=0){
        this.handleCounterOperationMultiply()
      }
    }, 1)
  }

  render (){
    const {
      counter,
      counterList,
      sum,
      multiply
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
        <CounterOperations
          sum={sum}
          multiply={multiply}
          onCounterOperationSum={() => this.handleCounterOperationSum()}
          onCounterOperationMultiply={() => this.handleCounterOperationMultiply()}
        />
      </div>
    )
  }
}
export default App;
