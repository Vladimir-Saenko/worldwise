import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initState = {
  user: null,
  isAuthentificated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthentificated: true };
    case "logout":
      return initState;
    default:
      throw new Error("Неизвестная операция...");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthentificated }, dispatch] = useReducer(
    reducer,
    initState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
    else alert("Авторизация не пройдена...");
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthentificated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthorization() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context используется вне зоны Provider.");
  return context;
}

export { AuthProvider, useAuthorization };
