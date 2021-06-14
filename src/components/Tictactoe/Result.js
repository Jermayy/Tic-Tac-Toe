// @flow

import * as React from 'react';

type Props = {
    winner: string
};

const Result = ({ winner }: Props):React.Node => {
  const Styles = {
    container: {
      border: 'solid',
    },

  };

  return (
    <div style={Styles.container} data-testid="result">
      <div>
        {winner === 'Circle' && 'Circle Wins!'}
        {winner === 'Cross' && 'Cross Wins!'}
        {winner === 'Tie' && "It's a Tie!"}
      </div>
      <button type="button" onClick={() => { window.location.reload(); }}> Reset Game</button>
    </div>

  );
};

export default Result;
