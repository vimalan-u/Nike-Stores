import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  return token && token.length > 0 ? children : <Navigate to={"/login"} />;
};

export const PrivateAdmin = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return token && token.length > 0 && !!isAdmin ? children : <Navigate to={"/login"} />;
};
