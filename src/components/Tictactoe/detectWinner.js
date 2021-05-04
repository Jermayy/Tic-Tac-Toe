// @flow


type Props = {
    p: [number, number, number,
        number, number, number,
        number, number, number],
}

const detectWinner = ({p}:Props): void | string => {

if(p[0] === 'Circle' && p[1] === 'Circle' && p[2] === 'Circle') return 'Circle';
if(p[3] === 'Circle' && p[4] === 'Circle' && p[5] === 'Circle') return 'Circle';
if(p[6] === 'Circle' && p[7] === 'Circle' && p[8] === 'Circle') return 'Circle';

if(p[0] === 'Circle' && p[3] === 'Circle' && p[6] === 'Circle') return 'Circle';
if(p[1] === 'Circle' && p[4] === 'Circle' && p[5] === 'Circle') return 'Circle';
if(p[2] === 'Circle' && p[5] === 'Circle' && p[8] === 'Circle') return 'Circle';

if(p[0] === 'Circle' && p[4] === 'Circle' && p[8] === 'Circle') return 'Circle';
if(p[2] === 'Circle' && p[4] === 'Circle' && p[6] === 'Circle') return 'Circle';


if(p[0] === 'Cross' && p[1] === 'Cross' && p[2] === 'Cross') return 'Cross';
if(p[3] === 'Cross' && p[4] === 'Cross' && p[5] === 'Cross') return 'Cross';
if(p[6] === 'Cross' && p[7] === 'Cross' && p[8] === 'Cross') return 'Cross';

if(p[0] === 'Cross' && p[3] === 'Cross' && p[6] === 'Cross') return 'Cross';
if(p[1] === 'Cross' && p[4] === 'Cross' && p[5] === 'Cross') return 'Cross';
if(p[2] === 'Cross' && p[5] === 'Cross' && p[8] === 'Cross') return 'Cross';

if(p[0] === 'Cross' && p[4] === 'Cross' && p[8] === 'Cross') return 'Cross';
if(p[2] === 'Cross' && p[4] === 'Cross' && p[6] === 'Cross') return 'Cross';

if(p.every(position => position !== 'Empty')) return 'Tie';

};

export default detectWinner;