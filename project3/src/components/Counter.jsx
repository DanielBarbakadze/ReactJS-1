import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class Counter extends React.Component {
    render(){
        return(
            <div>
                Hello, {this.props.counter}
            </div>
        );
    };
}

export default Counter;