import dispatcher from '../Dispatcher';
import axios from 'axios';
import { loadDetails } from './detailAction';
import actionTypes from './actionTypes';
jest.dontMock('./detailAction');
jest.mock('axios');
jest.mock('../Dispatcher');
describe('Detail action', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call details api route', async () => {
        axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
        await loadDetails();
        expect(axios.get.mock.calls[0][0]).toEqual('/api/detailUser/');
    });
});