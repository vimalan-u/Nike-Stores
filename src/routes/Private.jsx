import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return !token ? <Navigate to={"/auth"} /> : children;
};

export const PrivateAdmin = ({ children }) => {
  const { token, isAdmin } = useSelector((state) => state.auth);

  return !!token && !!isAdmin ? children : <Navigate to={"/auth"} />;
};
