import React from 'react';
import renderer from 'react-test-renderer';
import KeyPad from '../components/KeyPad';

test('Result component render', () => {
  const component = renderer.create(
    <KeyPad >1,2,3</KeyPad>,
  );
  let tree = component.toJSON();
  expect(tree)

  
});