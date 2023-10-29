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
    console.log(token);
    if (!token || token.length <= 0) {
      console.log("new user");
      return;
    }

    try {
      const response = await axios.get("/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response:", response);

      if (
        response.data.status === "Failed" &&
        response.data.message === "Please provide a valid token"
      ) {
        removeItem("token");
        removeItem("user");
        dispatch(logoutApi());
        setToast(toast, "Session expired. Please login again.", "success");
      }
    } catch (error) {
      // // Handle errors from the server
      console.log("Server had Error:", error);
      removeItem("token");
      removeItem("user");
      dispatch(logoutApi());
      setToast(toast, "Session expired. Please login again.", "success");
    }
  }

  // let options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  // getLocation();

  // async function success(pos) {
  //   let crd = pos.coords;

  //   console.log("Your current position is:");
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  //   try {
  //     let response = await axios.post(
  //       "/auth/addlocation",
  //       {
  //         latitude: crd.latitude,
  //         longitude: crd.longitude,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function errors(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.permissions
  //       .query({ name: "geolocation" })
  //       .then(function (result) {
  //         if (result.state === "granted") {
  //           console.log(result.state);
  //           navigator.geolocation.getCurrentPosition(success);
  //         } else if (result.state === "prompt") {
  //           navigator.geolocation.getCurrentPosition(success, errors, options);
  //         } else if (result.state === "denied") {
  //           console.log("denied", result);
  //         }
  //         result.onchange = function () {
  //           console.log(result.state);
  //         };
  //       });
  //   } else {
  //     console.log("Geolocation is not available on this device.");
  //   }
  // }

  return (
    <>
      {!isOnline && <NoInternet isOnline={isOnline} />}
      <Router />
    </>
  );
}

export default App;
