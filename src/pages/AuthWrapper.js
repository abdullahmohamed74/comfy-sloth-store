import { useAuth0 } from '@auth0/auth0-react';
import { Error, Loading } from '../components';

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return <>{children}</>;
}

export default AuthWrapper;
