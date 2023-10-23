import axios from "axios";
import "./App.css";
import { Router } from "./routes/Router";
import { useEffect, useState } from "react";
import NoInternet from "./components/Loaders/NoInternate";

function App() {
  // const [loading, setLoading] = useState(false);=
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connection, setConnection] = useState(false);

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  getLocation();

  async function success(pos) {
    let crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    try {
      // setLoading(true);
      let response = await axios.post(
        "/auth/addlocation",
        {
          latitude: crd.latitude,
          longitude: crd.longitude,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      // setLoading  (false);
    } catch (error) {
      console.log(error);
    }
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      console.log("Geolocation is not available on this device.");
    }
  }


  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false); 
    }


    window.addEventListener("online", () => {
      onlineHandler()
      connection && window.location.reload()
    });
    window.addEventListener("offline", () => {
      offlineHandler()
      setConnection(true)
    });


    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, [isOnline])



  return (
    <>
      {!isOnline && <NoInternet isOnline={isOnline} />}
      <Router />
    </>
  );
}

export default App;
