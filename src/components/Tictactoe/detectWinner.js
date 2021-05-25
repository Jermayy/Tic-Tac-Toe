// @flow

// type Props = {
//     p:string[],
// }

const detectWinner = (positions: Array<string>): void | string => {


if(positions[0] === 'Circle' && positions[1] === 'Circle' && positions[2] === 'Circle') return 'Circle';
if(positions[3] === 'Circle' && positions[4] === 'Circle' && positions[5] === 'Circle') return 'Circle';
if(positions[6] === 'Circle' && positions[7] === 'Circle' && positions[8] === 'Circle') return 'Circle';

if(positions[0] === 'Circle' && positions[3] === 'Circle' && positions[6] === 'Circle') return 'Circle';
if(positions[1] === 'Circle' && positions[4] === 'Circle' && positions[5] === 'Circle') return 'Circle';
if(positions[2] === 'Circle' && positions[5] === 'Circle' && positions[8] === 'Circle') return 'Circle';

if(positions[0] === 'Circle' && positions[4] === 'Circle' && positions[8] === 'Circle') return 'Circle';
if(positions[2] === 'Circle' && positions[4] === 'Circle' && positions[6] === 'Circle') return 'Circle';


if(positions[0] === 'Cross' && positions[1] === 'Cross' && positions[2] === 'Cross') return 'Cross';
if(positions[3] === 'Cross' && positions[4] === 'Cross' && positions[5] === 'Cross') return 'Cross';
if(positions[6] === 'Cross' && positions[7] === 'Cross' && positions[8] === 'Cross') return 'Cross';

if(positions[0] === 'Cross' && positions[3] === 'Cross' && positions[6] === 'Cross') return 'Cross';
if(positions[1] === 'Cross' && positions[4] === 'Cross' && positions[5] === 'Cross') return 'Cross';
if(positions[2] === 'Cross' && positions[5] === 'Cross' && positions[8] === 'Cross') return 'Cross';

if(positions[0] === 'Cross' && positions[4] === 'Cross' && positions[8] === 'Cross') return 'Cross';
if(positions[2] === 'Cross' && positions[4] === 'Cross' && positions[6] === 'Cross') return 'Cross';

if( positions[0] !== 'Empty' && positions[1] !== 'Empty' && positions[2] !== 'Empty' &&
    positions[3] !== 'Empty' && positions[4] !== 'Empty' && positions[5] !== 'Empty' &&
    positions[6] !== 'Empty' && positions[7] !== 'Empty' && positions[8] !== 'Empty'
) return 'Tie';

};

export default detectWinner;