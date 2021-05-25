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
        <div style={Styles.container} testId='result'>
        result
            {winner === "Circle" && "Circle Wins!"}
            {winner === "Cross" && "Cross Wins!"}
            {winner === "Tie" && "It's a Tie!"}
        </div>
    )
}

export default Result;