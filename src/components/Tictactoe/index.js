// @flow
import * as React from 'react';

import Square from '../Square';

const Tictactoe = ():React.Node => {
    const styles = {
        grid: {

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
            <Square/>
        </div>
    )
}

export default Tictactoe;