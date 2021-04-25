// @flow
import * as React from 'react';
import Tictactoe from './components/Tictactoe';
import './App.css';

const Main = (): React.Node => {

const Styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display:'flex',
    itemAlign: 'center',
    justifyContent: 'center'
  }
}

  return (
    <div style={Styles.container}>
    
        <Tictactoe/>
       </div>
       
  );
}

export default Main;
