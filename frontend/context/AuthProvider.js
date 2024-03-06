import { createContext, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";
const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOGIN":
      return { ...state, loading: true };
    case "SUCCESS_LOGIN":
      return { ...state, user: action.payload, loading: false };
    case "REJECT":
      return { ...state, error: action.error, loading: false };
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  LOGIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "START_LOGIN" });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success("با موفقیت وارد شدید");
          dispatch({ type: "SUCCESS_LOGIN", payload: data });
          Router.push("/");
        })
        .catch((err) => toast.error(err?.response?.data?.message));
      dispatch({ type: "REJECT", error: error?.response?.data?.message });
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
