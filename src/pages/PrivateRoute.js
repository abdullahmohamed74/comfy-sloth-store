import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function PrivateRoute({ children }) {
  const { user } = useAuth0();

  // if the user did NOT login
  // automatically navigate to home page
  if (!user) return <Navigate to="/" />;

  // if the user did login
  // automatically navigate to the required page
  return children;
}
export default PrivateRoute;
