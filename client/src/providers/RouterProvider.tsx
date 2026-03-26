import { type FC, type PropsWithChildren } from 'react';
import { HashRouter } from 'react-router';

export const RouterProvider: FC<PropsWithChildren> = ({ children }) => {
  return <HashRouter>{children}</HashRouter>;
};
