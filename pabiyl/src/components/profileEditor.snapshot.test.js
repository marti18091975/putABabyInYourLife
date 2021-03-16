import renderer from 'react-test-renderer';
import React from 'react';
import ProfileEditor from './ProfileEditor';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {

    const tree = renderer.create(
        <Router>
            <ProfileEditor />
        </Router>
    );

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});