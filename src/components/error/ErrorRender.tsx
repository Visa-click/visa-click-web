import { isError } from '@bunt/is';
import { Fn } from '@bunt/type';

import { ErrorPage } from './ErrorPage';

type Props = {
  error: unknown;
  onReset: Fn;
};

export const ErrorRender: React.FC<Props> = ({ error, onReset }) => {
  if (!isError(error)) {
    return <ErrorPage onReset={onReset} message="Unknown error" description={`${error}`} />;
  }

  return <ErrorPage onReset={onReset} message={error.message} description={error.stack} />;
};
