import React, { lazy, Suspense } from 'react';

const LazyUi = lazy(() => import('./Ui'));

const Ui = props => (
  <Suspense fallback={null}>
    <LazyUi {...props} />
  </Suspense>
);

export default Ui;
