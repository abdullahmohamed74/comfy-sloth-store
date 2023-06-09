import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [myUser, setMyUser] = useState(null);
  const { user, logout, loginWithRedirect } = useAuth0();

  // change the value of "myUser" state based on whether the user logedin or logedout
  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ logout, loginWithRedirect, myUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;
