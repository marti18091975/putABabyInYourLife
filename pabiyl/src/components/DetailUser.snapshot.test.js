import renderer from 'react-test-renderer';
import React from 'react';
import DetailUser from './DetailUser';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {

    const tree = renderer.create(
        <Router>
            <DetailUser />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});