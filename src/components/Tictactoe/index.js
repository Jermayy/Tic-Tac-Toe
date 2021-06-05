// @flow
import * as React from 'react';
import { range } from 'lodash';

import Square from '../Square';
import Result from './Result';
import values from './values';
import detectWinner from './detectWinner';

const Tictactoe = ():React.Node => {
  const [winnerResult, setWinnerResult] = React.useState();

  const [state, setState] = React.useState({
    player: values.Circle,
    positions: [
      values.Empty, values.Empty, values.Empty,
      values.Empty, values.Empty, values.Empty,
      values.Empty, values.Empty, values.Empty,
    ],
  });

  React.useEffect(() => {
    setWinnerResult(detectWinner([...state.positions]));
  }, [state]);

  const takeTurn = (position) => {
    const positions = [...state.positions];
    positions[position] = state.player;

    const newState = {
      player: state.player === values.Circle ? values.Cross : values.Circle,
      positions,
    };

    setState(newState);

    //    setWinnerResult(detectWinner([...newState.positions]));
  };

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridTemplateRows: 'auto auto auto',
      gap: '10px',
      backgroundColor: 'lightgrey',
    },
  };

  return (
    <div>
      <div style={styles.grid}>
        {range(0, 9).map((o) => (
          <Square
            key={o}
            position={o}
            value={state.positions[o]}
            takeTurn={takeTurn}
            disabled={!!winnerResult}
          />
        ))}
      </div>

      {winnerResult && <Result winner={winnerResult} />}
    </div>
  );
};

export default Tictactoe;
