// @flow

import * as React from 'react';

type Props = {
    winner: string
};

const Result = ({ winner }: Props):React.Node => {
  const Styles = {
    container: {
      border: 'solid',
      borderRadius: '20px',
      textAlign: 'center',
      padding: '30px',
      margin: '20px',
    },
    text: {
      padding: '20px',
      fontWeight: '700',
    },
    button: {
      padding: '20px',
      fontWeight: '700',
    },

  };

  return (
    <div style={Styles.container} data-testid="result">
      <div style={Styles.text}>
        {winner === 'Circle' && 'Circle Wins!'}
        {winner === 'Cross' && 'Cross Wins!'}
        {winner === 'Tie' && "It's a Tie!"}
      </div>
      <button type="button" onClick={() => { window.location.reload(); }} style={Styles.button}> Reset Game</button>
    </div>

  );
};

export default Result;
