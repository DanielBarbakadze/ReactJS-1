import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class CounterOperations extends React.Component {

    render(){
        return(
            <div>
                <button onClick={() => this.props.onCounterOperationSum()}>
                        Sum
                </button>
                <span> {this.props.sum} </span>
                <button onClick={() => this.props.onCounterOperationMultiply()}>
                        Multiply
                </button>
                <span> {this.props.multiply} </span>
            </div>
        );
    };
}

export default CounterOperations;