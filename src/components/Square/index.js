/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import * as React from 'react';

import Circle from '../Circle';
import Cross from '../Cross';

type Props = {
    position?: number,
    takeTurn: any,
    value?: string,
    disabled: boolean
}

const Square = ({
  position,
  value,
  takeTurn,
  disabled,
}: Props): React.Node => {
  const handleClick = () => {
    if (disabled) return;

    if (value === 'Empty') {
      takeTurn(position);
    }
  };

  const styles = {
    container: {
      width: '200px',
      height: '200px',
      backgroundColor: 'white',
      padding: 0,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },

  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      style={styles.container}
      onClick={handleClick}
    >
      {value === 'Circle' && <Circle /> }
      {value === 'Cross' && <Cross /> }
    </div>
  );
};

export default Square;
