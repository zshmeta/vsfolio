import React, { lazy, Suspense } from 'react';

const LazyExplorer = lazy(() => import('./Explorer'));

const Explorer = props => (
  <Suspense fallback={null}>
    <LazyExplorer {...props} />
  </Suspense>
);

export default Explorer;
