import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Root from './pages/Home';
import TuneImporter from './pages/TuneImporter';

export default () => {
  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/importer' element={<TuneImporter />} />
      <Route path='*' element={<h1>204 No Content</h1>} />
    </Routes>
  );
};
