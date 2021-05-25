// @flow
import * as React from 'react';

import Square from '../Square';
import Result from './Result';
import values from './values';
import detectWinner from './detectWinner';

const Tictactoe = ():React.Node => {

      let winnerResult;

    const [state, setState] = React.useState({
   player: values.Circle,
   positions:[
            values.Empty, values.Empty, values.Empty,
            values.Empty, values.Empty, values.Empty,
            values.Empty, values.Empty, values.Empty
        ],
    });
     
    const takeTurn = (position) => {
        const positions = [...state.positions];
        positions[position] = state.player;

        setState({
            player: state.player === values.Circle ? values.Cross : values.Circle,
            positions,
        })

      winnerResult = detectWinner([...state.positions]);
    
    }

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            gridTemplateRows: 'auto auto auto',
            gap: '10px',
            backgroundColor: 'lightgrey',
        }
    }
    
    return(
        <div>
        <div style={styles.grid}>
            <Square position={0} value ={state.positions[0]} takeTurn={takeTurn}/>
            <Square position={1} value ={state.positions[1]} takeTurn={takeTurn}/>
            <Square position={2} value ={state.positions[2]} takeTurn={takeTurn}/>
            <Square position={3} value ={state.positions[3]} takeTurn={takeTurn}/>
            <Square position={4} value ={state.positions[4]} takeTurn={takeTurn}/>
            <Square position={5} value ={state.positions[5]} takeTurn={takeTurn}/>
            <Square position={6} value ={state.positions[6]} takeTurn={takeTurn}/>
            <Square position={7} value ={state.positions[7]} takeTurn={takeTurn}/>
            <Square position={8} value ={state.positions[8]} takeTurn={takeTurn}/>
        </div>
        
       {winnerResult && <Result winner={winnerResult} />}
        </div>
    )
}

export default Tictactoe;