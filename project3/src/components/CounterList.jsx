import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class CounterList extends React.Component {
    render(){
        return(
            <div>
                <div>
                    {
                        // this.props.counterList.map(counter => `${counter}, `)
                        this.props.counterList.join(', ')
                    }
                </div>
                <div>
                    <button onClick={() => this.props.onCounterList()}>
                        Push
                    </button>
                    <button onClick={() => this.props.onCounterListClear()}>
                        Clear
                    </button>
                </div>
            </div>
        );
    };
}

export default CounterList;