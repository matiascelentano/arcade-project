import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    let userList = [
      { id: 1, name: "Matias Celentano", email: "test@gmail.com", role: 0, userImg:'user.jpg'},
      { id: 2, name: "Juan Carlos Perez", email: "test123@gmail.com", role: 1, userImg:'user.jpg'},
      { id: 3, name: "Valentina Rodriguez", email: "testtest@gmail.com", role: 0, userImg:'user.jpg'},
      { id: 4, name: "Rodrigo Rodriguez", email: "testrr@gmail.com", role: 1, userImg:'user.jpg'},
      { id: 5, name: "John Carpenter", email: "mail@gmail.com", role: 0, userImg:'user.jpg'},
    ];

    const searchUser = userList.find(u => u.email === email)
  
    if(searchUser){
      setUser(searchUser)
      return searchUser
    }else{
      throw new Error("Usuario no encontrado");
    }
  };

  const logout = () => {
    setUser(null)
  }

  const isAuthenticated = () =>{
    if(user !== null){
      return true
    }else{
      return false
    }
  }

  const isAdmin = () =>{
    if (user !== null && user.role == 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin}}>
      {children}
    </AuthContext.Provider>
  );
};
