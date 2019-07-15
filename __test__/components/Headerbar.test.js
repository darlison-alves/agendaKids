import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../../src/components/Login/Form';


describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});