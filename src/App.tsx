import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { ROUTES } from './config/routes';
import PrivateRoute from './HOC/PrivateRoutes';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
