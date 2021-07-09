import React from 'react';
import axios from 'axios';
import {render,cleanup, fireEvent,act} from '@testing-library/react';
import App from '../App';
afterEach(()=>{    
    cleanup();
});
jest.mock('axios');
describe('Testing <App /> component', () => {
    it('Input is truthy',async ()=>{
        const app = render(<App />);
    const reports = [{}];
    const search = app.getByTestId('search');
        fireEvent.change(search,{
            target:{value:'lagos'}
        });
        expect(search.value).toBeTruthy();
    });
    it('Weather report',async ()=>{
        const getSpy = jest.spyOn(axios,'get');
        const app = render(<App />);
        const search = app.getByTestId('search');
        await act(async ()=>{
            await fireEvent.keyPress(search,{key:'Enter',charCode:13});
         });
         expect(getSpy).toBeCalled();
         expect(app.getByTestId('report')).toBeInTheDocument();
    })
});