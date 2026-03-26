import { type FC, type PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router';

export const RouterProvider: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
