import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../components/Main';

test('Result component render', () => {
  const component = renderer.create(
    <Main >Simple Calculator</Main>,
  );
  let tree = component.toJSON();
  expect(tree)

  
});