// @flow
import * as React from 'react';


const Circle = (): React.Node =>{

const Styles = {
    container:{
        backgroundColor: 'blue',
        maxWidth: '90%',
        padding: 0,
        margin: 0,
        borderRadius: 100,
    },
    inside:{
         backgroundColor: 'white',
        maxWidth: '80%',
        padding: 0,
        margin: 0,
        borderRadius: 100,
    }


}
return(
    <>
    <div style={Styles.container}>
            <div style={Styles.inside}>
            </div>
    </div>
    </>
)

}

export default Circle;