import renderer from 'react-test-renderer';
import React from 'react';
import MainPage from './MainPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {

    const tree = renderer.create(
        <Router>
            <MainPage />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});