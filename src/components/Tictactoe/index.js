// @flow
import * as React from 'react';

import Square from '../Square';

const Tictactoe = ():React.Node => {
        const Empty = 'Empty';
        const Circle = 'O';
        const Cross = 'X';

        const positions = [
            Empty, Circle ,Cross,
            Empty, Empty, Circle,
            Cross, Cross, Empty
        ]
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
        <div style={styles.grid}>
            <Square position={0} value ={positions[0]}/>
            <Square position={1} value ={positions[1]}/>
            <Square position={2} value ={positions[2]}/>
            <Square position={3} value ={positions[3]}/>
            <Square position={4} value ={positions[4]}/>
            <Square position={5} value ={positions[5]}/>
            <Square position={6} value ={positions[6]}/>
            <Square position={7} value ={positions[7]}/>
            <Square position={8} value ={positions[8]}/>
        </div>
    )
}

export default Tictactoe;