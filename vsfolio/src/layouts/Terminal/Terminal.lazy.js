import React, { lazy, Suspense } from 'react';

const LazyTerminal = lazy(() => import('./Terminal'));

const Terminal = props => (
  <Suspense fallback={null}>
    <LazyTerminal {...props} />
  </Suspense>
);

export default Terminal;
