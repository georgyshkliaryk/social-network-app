import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "616212dd8bbd3ebd2486d5cd",
    username: "george",
    email: "george@mail",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: ["616212dd8bbd3ebd2486d5cd"],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
