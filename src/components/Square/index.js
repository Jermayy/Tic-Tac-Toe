// @flow
import * as React from 'react';

const Square = ():React.Node=> {
const styles={
container:{
Width: '200px',
height: '100px',
border: 'black, solid',
itemAlign: 'center',
backgroundColor: 'white'
}

};

return(
<div
style={styles.container}
> Square</div>
)
}

export default Square;