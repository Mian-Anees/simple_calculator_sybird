import React from 'react';
import renderer from 'react-test-renderer';
import Result from '../components/Result';

test('Result component render', () => {
  const component = renderer.create(
    <Result >152</Result>,
  );
  let tree = component.toJSON();
  expect(tree)

  
});