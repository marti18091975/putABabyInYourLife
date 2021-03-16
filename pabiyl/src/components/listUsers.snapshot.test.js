import renderer from 'react-test-renderer';
import React from 'react';
import ListUsers from './ListUsers';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
    const props = {
        usersList: []
    }

    const tree = renderer.create(
        <Router>
            <ListUsers {...props} />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});