import React from 'react';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Home from '../pages/Home';

test('page Root', () => {
  const component = Renderer.create(
    <MemoryRouter><Home /></MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
