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
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    )
}

export default Tictactoe;