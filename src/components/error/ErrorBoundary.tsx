import React from 'react';
import { useRouteError } from 'react-router-dom';

import { ErrorRender } from './ErrorRender';

export const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  console.log(error);

  return <ErrorRender error={error} onReset={() => void 0} />;
};
