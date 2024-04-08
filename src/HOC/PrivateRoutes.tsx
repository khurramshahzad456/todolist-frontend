import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '../config/routes';
import { isAuthenticated } from '../config/constants';

const PrivateRoute = (): JSX.Element => {
  return <>{isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />}</>;
};

export default PrivateRoute;
