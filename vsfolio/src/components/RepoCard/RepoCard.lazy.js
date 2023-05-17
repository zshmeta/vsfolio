import React, { lazy, Suspense } from 'react';

const LazyRepoCard = lazy(() => import('./RepoCard'));

const RepoCard = props => (
  <Suspense fallback={null}>
    <LazyRepoCard {...props} />
  </Suspense>
);

export default RepoCard;
