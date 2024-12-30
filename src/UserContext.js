import React, { createContext, useContext, useState } from 'react';



const UserContext = createContext();

// Composant Provider pour fournir les utilisateurs à toute l'application
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
