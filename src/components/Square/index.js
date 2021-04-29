// @flow
import * as React from 'react';

import Circle from '../Circle';
import Cross from '../Cross';


type Props = {
    position?: number,
    value?: string,
    takeTurn: any,
}


const Square = ({ 
    position,
    value,
    takeTurn
}: 
Props ) :React.Node=> {

const handleClick = () => {
    if (value === 'Empty'){
takeTurn(position);
    }
        
    }

const styles={
container:{
    width:'200px',
    height:'200px',
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
}

};

return(
<div
style={styles.container}
onClick={handleClick}
>
{value === 'Circle' && <Circle /> }
{value === 'Cross' && <Cross /> }
</div>
)
}

export default Square;