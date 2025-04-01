import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import React from 'react';

interface LazyLoadOptions {
  loading?: React.ReactNode;
  ssr?: boolean;
}

export const lazyLoad = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {}
) => {
  const {
    loading = React.createElement('div', {
      className: 'w-full h-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg'
    }),
    ssr = true,
  } = options;

  const DynamicComponent = dynamic(importFunc, {
    loading: () => loading,
    ssr,
  });

  return (props: React.ComponentProps<T>) => 
    React.createElement(Suspense, { fallback: loading },
      React.createElement(DynamicComponent, props)
    );
};

// Example usage:
// const HeavyComponent = lazyLoad(() => import('../components/Heavy'), {
//   loading: <CustomLoadingComponent />,
//   ssr: false
// }); 