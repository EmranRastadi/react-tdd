import {fireEvent, render, screen} from '@testing-library/react';
import Counter from './counter';
import user from '@testing-library/user-event';
import exp from 'constants';

describe('counter', () => {
    describe('with initial default count = 10 ', () => {
        beforeEach(() => {
            render(<Counter description={'this is a counter'} defaultCount={10}/>);
        });

        it('this is initial show ; counter = 10', () => {
            expect(screen.getByText('My counter :10')).toBeInTheDocument();
        });

        describe('when click on + and incrementor is 5 => my counter === ', () => {
            beforeEach(() => {
                user.type(screen.getByLabelText(/incrementor/i), '{selectall}5');
                user.click(screen.getByRole('button', {name: 'increase'}));
            });
            it('after click + and input value is 5', () => {
                expect(screen.getByText('My counter :15')).toBeInTheDocument();
            });


            describe('when delete input value and press +', () => {
                beforeEach(() => {
                    user.type(screen.getByLabelText(/incrementor/i), '{selectall}{delete}');
                    user.click(screen.getByRole('button', {name: 'increase'}));
                });

                it('render "current value is : 16"', function () {
                    expect(screen.getByText('My counter :16')).toBeInTheDocument();
                });
            });
        });

        describe('when cliced on - and type in input 5', () => {
            beforeEach(() => {
                user.type(screen.getByLabelText(/incrementor/i), '{selectall}5');
                user.click(screen.getByRole('button', {name: 'decrease'}));
            });

            it('render "My counter :5', () => {
                expect(screen.getByText('My counter :5')).toBeInTheDocument();
            });

            describe("when delete input value and press -" , () => {
                beforeEach(()=>{
                    user.type(screen.getByLabelText(/incrementor/i) , "{selectall}{delete}");
                    user.click(screen.getByRole('button' , {name : 'decrease'}))
                })

                it('render "My counter :4', function () {
                    expect(screen.getByText('My counter :4')).toBeInTheDocument()
                });
            })
        });
    });
});

// it('default count = 3 , after click + the counter = 2  ', function () {
//     render(<Counter description={'hi desc'} defaultCount={3}/>);
//     fireEvent.click(screen.getByRole('button', {name: '-'}));
//     expect(screen.getByText('My counter :2')).toBeInTheDocument();
// });