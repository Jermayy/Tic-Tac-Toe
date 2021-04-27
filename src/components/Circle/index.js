// @flow
import * as React from 'react';


const Circle = (): React.Node =>{

const Styles = {
    container:{
        alignItems:'center',
        backgroundColor: '#349eeb',
        borderRadius: '100px',
        display: 'flex',
        height: '90%',
        justifyContent:'center',
        position: 'relative',
        verticalAlign: 'middle',
        width: '90%',
    },
    inside:{
        backgroundColor: 'white',
        borderRadius: '100px',
        height: '80%',
        position: 'absolute',
        width: '80%',
    }


}

return(
    <div style={Styles.container}>
            <div style={Styles.inside}>
            </div>
    </div>
)};

export default Circle;