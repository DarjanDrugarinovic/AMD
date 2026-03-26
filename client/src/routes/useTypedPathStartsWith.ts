import { useLocation } from 'react-router-dom';
import { AllRoutes } from './useTypedParams';

export const useTypedPathStartsWith = <Path extends AllRoutes>(path: Path) => {
  const { pathname } = useLocation();
  return pathname.startsWith(`/${path}`);
};
