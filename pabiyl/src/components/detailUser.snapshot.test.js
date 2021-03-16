import renderer from 'react-test-renderer';
import React from 'react';
import DetailUser from './DetailUser';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
    const props = {
        match: {
            params: {
                detailUserId: "5f5dcd1985b8254bf0e90f23"
            }
        }
    };
    const tree = renderer.create(
        <Router>
            <DetailUser {...props} />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});