import renderer from 'react-test-renderer';
import React from 'react';
import DetailEmail from './DetailEmail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
    const props = {
        match: {
            params: {
                _id: "5f5dcd1985b8254bf0e90f23"
            }
        }
    };
    const tree = renderer.create(
        <Router>
            <DetailEmail {...props} />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});