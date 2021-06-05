//@flow
import * as React from 'react';
import {render} from '@testing-library/react';

import Result from './Result';
// import detectWinner from './detectWinner';

// const mockData ={

// circleWin: ['Circle','Circle','Circle',
//             'Cross','Cross', 'Empty',
//             'Empty', 'Empty', 'Empty' ],
// crossWin: ['Cross','Cross','Cross',
//             'Circle','Circle', 'Empty',
//             'Empty', 'Circle', 'Empty' ],
// tieGame: ['Cross','Circle','Cross',
//             'Circle','Cross', 'Circle',
//             'Cross', 'Circle', 'Circle' ],

// }


describe('<Result />', () =>{

it('renders with Circle as winner', () => {
    const {getByTestId} = render(
        <Result winner={'Circle'} />
    );

expect (getByTestId('result').textContent).toBe('Circle Wins!')
})


it('renders with Cross as winner', () => {
    const {getByTestId} = render(
        <Result winner={'Cross'} />
    );

expect (getByTestId('result').textContent).toBe('Cross Wins!')
})
it('renders a tie game', () => {
    const {getByTestId} = render(
        <Result winner={'Tie'} />
    );

expect (getByTestId('result').textContent).toBe('It\'s a Tie!')
})


})