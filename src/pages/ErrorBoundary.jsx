import React, { lazy } from "react";
const Footer = lazy(() => import("../pages/Footer"));
const Navbar = lazy(() => import("../pages/Navbar"));
const NotFound = lazy(() => import("../pages/NotFound"));

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Error path
      return (
        <>
          <Navbar />
          <NotFound data={this.state.error.message} />
          <Footer />
        </>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
