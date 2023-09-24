// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

export const Public = ({ children }) => {
  // const token = useSelector((state) => state.auth.token);

  // return token ? <Navigate to={'/'} /> : children;
  return children;
};

export const PublicAdmin = ({ children }) => {
  return children;
};
