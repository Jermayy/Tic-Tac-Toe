// @flow
import * as React from 'react';

const Cross = (): React.Node => {
  const Styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    side1: {
      backgroundColor: 'red',
      width: '10%',
      height: '90%',
      left: '5%',
      position: 'relative',
      transform: 'rotate(45deg)',
    },
    side2: {
      backgroundColor: 'red',
      height: '90%',
      position: 'relative',
      right: '5%',
      transform: 'rotate(135deg)',
      width: '10%',
    },
  };

  return (
    <>
      <div style={Styles.side1}> </div>
      <div style={Styles.side2}> </div>
    </>
  );
};

export default Cross;
