import React from 'react';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import TuneImporter from '../pages/TuneImporter';

test('page Start', () => {
  const component = Renderer.create(
    <MemoryRouter><TuneImporter /></MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
