import React, { lazy, Suspense } from 'react';

const LazyTyppi = lazy(() => import('./Typpi'));

const Typpi = props => (
  <Suspense fallback={null}>
    <LazyTyppi {...props} />
  </Suspense>
);

export default Typpi;
