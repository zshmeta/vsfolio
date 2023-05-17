import React, { lazy, Suspense } from 'react';

const LazyHackerNewsCard = lazy(() => import('./HackerNewsCard'));

const HackerNewsCard = props => (
  <Suspense fallback={null}>
    <LazyHackerNewsCard {...props} />
  </Suspense>
);

export default HackerNewsCard;
