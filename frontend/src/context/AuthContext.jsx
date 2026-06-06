import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
 const login = (data) => {
  // data = { token, username, role }
  localStorage.setItem("token", data.token);         // ✅ for api.js interceptor
  localStorage.setItem("user", JSON.stringify({
    username: data.username,
    role: data.role
  }));                                               // ✅ for user state
  setUser({ username: data.username, role: data.role });
};

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;