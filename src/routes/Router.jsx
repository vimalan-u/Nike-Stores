import { Route, Routes, useLocation } from "react-router-dom";
import { Private, PrivateAdmin } from "./Private";
import { Suspense, lazy } from "react";
import ErrorBoundary from "../pages/ErrorBoundary";
import NavbarFetureimages from "../pages/NavbarFeatureiMage";

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
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
const UserPage = lazy(() => import("../pages/UserPage"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AdminLayout = lazy(() => import("../srcADMIN/pages/AdminLayout"));
const AdminDashboard = lazy(() => import("../srcADMIN/pages/Dashboard.admin"));
const AdminAllUsers = lazy(() => import("../srcADMIN/pages/AllUsers.admin"));
const AdminProfile = lazy(() => import("../srcADMIN/pages/Profile.admin"));
const AdminAllProducts = lazy(() =>
  import("../srcADMIN/pages/AllProducts.admin")
);
const AdminAddProducts = lazy(() =>
  import("../srcADMIN/pages/AddProduct.admin")
);
const AdminUpdateProduct = lazy(() =>
  import("../srcADMIN/pages/UpdateProduct.admin")
);

export const Router = () => {
  const location = useLocation();
  console.log("location.pathname", location.pathname);
  const NavbarComponent =
    location.pathname === "/" ? <NavbarFetureimages /> : <Navbar />;

  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/admindashboard" ||
    location.pathname === "/adminallusers" ||
    location.pathname === "/adminprofile" ||
    location.pathname === "/adminallproducts" ||
    location.pathname === "/adminaddproducts" ||
    location.pathname === "/adminaupdateproduct";
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        {isAdminRoute ? null : location.pathname === "/" ? (
          <NavbarFetureimages />
        ) : (
          <Navbar />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/sale" element={<Products />} />
          <Route path="/men" element={<Products />} />
          <Route path="/women" element={<Products />} />
          <Route path="/kids" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/description/:id" element={<Description />} />
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
          <Route
            path="/userprofile"
            element={
              <Private>
                <UserPage />
              </Private>
            }
          />
          <Route
            path="/contactus"
            element={
              <Private>
                <Contact />
              </Private>
            }
          />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/admindashboard"
            element={
              <PrivateAdmin>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </PrivateAdmin>
            }
          />

          <Route
            path="/adminallusers"
            element={
              <PrivateAdmin>
                <AdminLayout>
                  <AdminAllUsers />
                </AdminLayout>
              </PrivateAdmin>
            }
          />

          <Route
            path="/adminprofile"
            element={
              <PrivateAdmin>
                <AdminLayout>
                  <AdminProfile />
                </AdminLayout>
              </PrivateAdmin>
            }
          />
          <Route
            path="/adminallproducts"
            element={
              <PrivateAdmin>
                <AdminLayout>
                  <AdminAllProducts />
                </AdminLayout>
              </PrivateAdmin>
            }
          />
          <Route
            path="/adminaddproducts"
            element={
              <PrivateAdmin>
                <AdminLayout>
                  <AdminAddProducts />
                </AdminLayout>
              </PrivateAdmin>
            }
          />
          <Route
            path="/adminaupdateproduct"
            element={
              <PrivateAdmin>
                <AdminLayout>
                  <AdminUpdateProduct />
                </AdminLayout>
              </PrivateAdmin>
            }
          />
        </Routes>

        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};
