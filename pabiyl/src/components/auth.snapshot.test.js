import renderer from 'react-test-renderer';
import React from 'react';
import Auth from './Auth';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {

    const tree = renderer.create(
        <Router>
            <Auth />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});