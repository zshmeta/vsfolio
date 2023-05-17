import React, { lazy, Suspense } from 'react';

const LazyUiInput = lazy(() => import('./UiInput'));

const UiInput = props => (
  <Suspense fallback={null}>
    <LazyUiInput {...props} />
  </Suspense>
);

export default UiInput;
