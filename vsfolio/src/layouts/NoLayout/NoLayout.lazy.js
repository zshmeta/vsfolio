import React, { lazy, Suspense } from 'react';

const LazyNoLayout = lazy(() => import('./NoLayout'));

const NoLayout = props => (
  <Suspense fallback={null}>
    <LazyNoLayout {...props} />
  </Suspense>
);

export default NoLayout;
