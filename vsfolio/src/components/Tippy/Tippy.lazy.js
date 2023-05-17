import React, { lazy, Suspense } from 'react';

const LazyTippy = lazy(() => import('./Tippy'));

const Tippy = props => (
  <Suspense fallback={null}>
    <LazyTippy {...props} />
  </Suspense>
);

export default Tippy;
