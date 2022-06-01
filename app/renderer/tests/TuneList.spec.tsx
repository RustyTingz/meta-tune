import React from 'react';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import TuneList from '../components/TuneList';

test('component TuneList', () => {
  const component = Renderer.create(
    <MemoryRouter><TuneList /></MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
