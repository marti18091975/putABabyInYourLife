import renderer from 'react-test-renderer';
import React from 'react';
import Profile from './Profile';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {

    const tree = renderer.create(
        <Router>
            <Profile />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});