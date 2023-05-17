import React, { lazy, Suspense } from 'react';

const LazyTabsBar = lazy(() => import('./TabsBar'));

const TabsBar = props => (
  <Suspense fallback={null}>
    <LazyTabsBar {...props} />
  </Suspense>
);

export default TabsBar;
