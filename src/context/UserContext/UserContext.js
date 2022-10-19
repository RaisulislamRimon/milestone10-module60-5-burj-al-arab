import React, { createContext } from "react";

export const AuthContext = createContext();

const UserContext = () => {
  const authInfo = {};
  return (
    <div>
      <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    </div>
  );
};

export default UserContext;
