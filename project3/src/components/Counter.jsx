import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class Counter extends React.Component {
    render(){
        return(
            <div>
                <span>{this.props.counter}</span>
                <div>
                    <button onClick={() => this.props.onCounterAdd()}>
                        Add
                    </button>
                    <button onClick={() => this.props.onCounterSubstract()}>
                        Substract
                    </button>
                </div>
            </div>
        );
    };
}

export default Counter;