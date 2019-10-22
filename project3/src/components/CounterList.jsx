import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class CounterList extends React.Component {
    render(){
        return(
            <div>
                <div>
                    {
                        this.props.counterList.map(counter => `${counter}, `)
                    }
                </div>
                <div>
                    <button onClick={() => this.props.onCounterList()}>
                        Push
                    </button>
                </div>
            </div>
        );
    };
}

export default CounterList;