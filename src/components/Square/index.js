// @flow
import * as React from 'react';

const Square = ():React.Node=> {
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
Square
</div>
)
}

export default Square;