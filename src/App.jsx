import axios from "axios";
import "./App.css";
import { Router } from "./routes/Router";
import { useEffect, useState } from "react";
import NoInternet from "./components/Loaders/NoInternate";
import { getItem, removeItem } from "./utils/cookiestorage";
import { setToast } from "./utils/extraFunctions";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "./redux/Reducers/authReducer";

function App() {
  const toast = useToast();

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  checkUser();

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
      window.location.reload();
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  async function checkUser() {
    if (!token || token.length <= 0) {
      // console.log("new user");
      return;
    }

    try {
      const response = await axios.get("/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("Response:", response);

      if (
        response.data.status === "Failed" &&
        response.data.message === "Please provide a valid token"
      ) {
        removeItem("token");
        removeItem("user");
        dispatch(logoutApi());
        removeItem("persist:root");
        setToast(toast, "Session expired. Please login again.", "success");
      }
    } catch (error) {
      // // Handle errors from the server
      console.log("Server had Error:", error);
      removeItem("token");
      removeItem("user");
      dispatch(logoutApi());
      removeItem("persist:root");
      setToast(toast, "Session expired. Please login again.", "success");
    }
  }

  return (
    <>
      {!isOnline && <NoInternet isOnline={isOnline} />}
      <Router />
    </>
  );
}

export default App;
