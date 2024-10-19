import { isFunction, isString } from '@bunt/is';

type Thunk<T> = T | (() => T);

type AssertionMessage = Thunk<string | Error>;

export function assert(
  expr: unknown,
  message: AssertionMessage = 'Assertion failed',
): asserts expr {
  if (!expr) {
    message = isFunction(message) ? message() : message;
    const error = isString(message) ? new Error(message) : message;
    throw error;
  }
}

export const isReactSnap = navigator.userAgent === 'ReactSnap';
