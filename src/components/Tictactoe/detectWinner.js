// @flow

type Props = {
    p:string[],
}

const detectWinner = (props:Props): void | string => {


if(props.p[0] === 'Circle' && props.p[1] === 'Circle' && props.p[2] === 'Circle') return 'Circle';
if(props.p[3] === 'Circle' && props.p[4] === 'Circle' && props.p[5] === 'Circle') return 'Circle';
if(props.p[6] === 'Circle' && props.p[7] === 'Circle' && props.p[8] === 'Circle') return 'Circle';

if(props.p[0] === 'Circle' && props.p[3] === 'Circle' && props.p[6] === 'Circle') return 'Circle';
if(props.p[1] === 'Circle' && props.p[4] === 'Circle' && props.p[5] === 'Circle') return 'Circle';
if(props.p[2] === 'Circle' && props.p[5] === 'Circle' && props.p[8] === 'Circle') return 'Circle';

if(props.p[0] === 'Circle' && props.p[4] === 'Circle' && props.p[8] === 'Circle') return 'Circle';
if(props.p[2] === 'Circle' && props.p[4] === 'Circle' && props.p[6] === 'Circle') return 'Circle';


if(props.p[0] === 'Cross' && props.p[1] === 'Cross' && props.p[2] === 'Cross') return 'Cross';
if(props.p[3] === 'Cross' && props.p[4] === 'Cross' && props.p[5] === 'Cross') return 'Cross';
if(props.p[6] === 'Cross' && props.p[7] === 'Cross' && props.p[8] === 'Cross') return 'Cross';

if(props.p[0] === 'Cross' && props.p[3] === 'Cross' && props.p[6] === 'Cross') return 'Cross';
if(props.p[1] === 'Cross' && props.p[4] === 'Cross' && props.p[5] === 'Cross') return 'Cross';
if(props.p[2] === 'Cross' && props.p[5] === 'Cross' && props.p[8] === 'Cross') return 'Cross';

if(props.p[0] === 'Cross' && props.p[4] === 'Cross' && props.p[8] === 'Cross') return 'Cross';
if(props.p[2] === 'Cross' && props.p[4] === 'Cross' && props.p[6] === 'Cross') return 'Cross';

if( props.p[0] !== 'Empty' && props.p[1] !== 'Empty' && props.p[2] !== 'Empty' &&
    props.p[3] !== 'Empty' && props.p[4] !== 'Empty' && props.p[5] !== 'Empty' &&
    props.p[6] !== 'Empty' && props.p[7] !== 'Empty' && props.p[8] !== 'Empty'
) return 'Tie';

};

export default detectWinner;