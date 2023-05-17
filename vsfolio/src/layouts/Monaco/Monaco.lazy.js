import React, { lazy, Suspense } from 'react';

const LazyMonaco = lazy(() => import('./Monaco'));

const Monaco = props => (
  <Suspense fallback={null}>
    <LazyMonaco {...props} />
  </Suspense>
);

export default Monaco;
