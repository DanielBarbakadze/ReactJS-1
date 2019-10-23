import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class CounterListSorted extends React.Component {
    
    render(){
        return(
            <div>
                    <button onClick={() => this.props.onCounterListSorted()}>
                        Sort
                    </button>
            </div>
        );
    };
}

export default CounterListSorted;