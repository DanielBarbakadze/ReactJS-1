import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class CounterInput extends React.Component {

    state = {value: ''};

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
      }

    handleClick() {
    this.props.onCounterInput(this.state.value);
    this.setState({value: ''});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
                    <input type="button" value="POP" onClick={() => this.handleClick()}></input>
                </form>
            </div>
        );
    };
}

export default CounterInput;