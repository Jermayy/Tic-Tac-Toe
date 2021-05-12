// @flow

import * as React from 'react';


type Props = {
    winner: string
};

const Result = ({winner}: Props):React.Node => {
    
    const Styles = {
       container:{
border: 'solid'
       }
        
    };

    return(
        <div style={Styles.container}>
            Winner
        </div>
    )
}

export default Result;