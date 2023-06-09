import { Layout } from '@Components/Core';
import { AuthContext } from 'auth/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  return user ? <Layout /> : <Navigate to={'/'} replace />;
};

export default PrivateRoute;
