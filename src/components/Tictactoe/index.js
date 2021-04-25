// @flow
import * as React from 'react';

import Square from '../Square';

const Tictactoe = ():React.Node => {
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
            <Square position={0}/>
            <Square position={1}/>
            <Square position={2}/>
            <Square position={3}/>
            <Square position={4}/>
            <Square position={5}/>
            <Square position={6}/>
            <Square position={7}/>
            <Square position={8}/>
        </div>
    )
}

export default Tictactoe;