// @flow
import * as React from 'react';

type Props = {
    position?: number,
}


const Square = ({ 
    position,
}: 
Props ) :React.Node=> {
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
}

};

return(
<div
style={styles.container}
>
{position}
</div>
)
}

export default Square;