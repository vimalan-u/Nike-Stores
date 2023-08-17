import { Route, Routes } from "react-router-dom";
import { Private } from "./Private";
import { Suspense, lazy } from "react";

const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Description = lazy(() => import("../pages/Description"));
const Favourite = lazy(() => import("../pages/Favourite"));
const Footer = lazy(() => import("../pages/Footer"));
const Home = lazy(() => import("../pages/Home"));
const Navbar = lazy(() => import("../pages/Navbar"));
const Order = lazy(() => import("../pages/Order"));
const Products = lazy(() => import("../pages/Products"));
const SignupCard = lazy(() => import("../pages/SignupCard"));
const LoginCard = lazy(() => import("../pages/LoginCard"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"))

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/sale" element={<Products />} />
        <Route path="/newin" element={<Products />} />
        <Route path="/summershop" element={<Products />} />
        <Route path="/goingout" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/description" element={<Description />} />
        <Route path="/resetpassword" element={<ForgetPassword />} />
        <Route
          path="/favourite"
          element={
            <Private>
              <Favourite />
            </Private>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <Private>
              <Checkout />
            </Private>
          }
        />
        <Route
          path="/orders"
          element={
            <Private>
              <Order />
            </Private>
          }
        />
      </Routes>
      <Footer />
    </Suspense>
  );
};
