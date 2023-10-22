import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Loading } from "../../components/loading/Loading";
import { Heading } from "@chakra-ui/react";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const indiaCenter = {
  lat: 20.5937,
  lng: 78.9629,
};

const cities = [
  { name: "Delhi", position: { lat: 28.6139, lng: 77.209 } },
  { name: "Mumbai", position: { lat: 19.076, lng: 72.8777 } },
  { name: "Bangalore", position: { lat: 12.9716, lng: 77.5946 } },
  { name: "Kolkata", position: { lat: 22.5726, lng: 88.3639 } },
  { name: "Chennai", position: { lat: 13.0827, lng: 80.2707 } },
  { name: "Hyderabad", position: { lat: 17.385, lng: 78.4867 } },
  { name: "Pune", position: { lat: 18.5204, lng: 73.8567 } },
  { name: "Ahmedabad", position: { lat: 23.0225, lng: 72.5714 } },
  { name: "Jaipur", position: { lat: 26.9124, lng: 75.7873 } },
  { name: "Lucknow", position: { lat: 26.8467, lng: 80.9462 } },
  { name: "Kanpur", position: { lat: 26.4499, lng: 80.3319 } },
  { name: "Nagpur", position: { lat: 21.1458, lng: 79.0882 } },
  { name: "Indore", position: { lat: 22.7196, lng: 75.8577 } },
  { name: "Bhopal", position: { lat: 23.2599, lng: 77.4126 } },
  { name: "Ludhiana", position: { lat: 30.9004, lng: 75.8573 } },
  { name: "Agra", position: { lat: 27.1767, lng: 78.0081 } },
  { name: "Varanasi", position: { lat: 25.3176, lng: 82.9739 } },
  { name: "Patna", position: { lat: 25.5941, lng: 85.1376 } },
  { name: "Ranchi", position: { lat: 23.3441, lng: 85.3096 } },
  { name: "Guwahati", position: { lat: 26.1445, lng: 91.7362 } },
  { name: "Bhubaneswar", position: { lat: 20.2961, lng: 85.8245 } },
  { name: "Thiruvananthapuram", position: { lat: 8.5241, lng: 76.9366 } },
  { name: "Kochi", position: { lat: 9.9312, lng: 76.2673 } },
  { name: "Chandigarh", position: { lat: 30.7333, lng: 76.7794 } },
  { name: "Jammu", position: { lat: 32.7266, lng: 74.857 } },
  { name: "Srinagar", position: { lat: 34.0837, lng: 74.7973 } },
  { name: "Raipur", position: { lat: 21.2514, lng: 81.6296 } },
  { name: "Rajkot", position: { lat: 22.3039, lng: 70.8022 } },
  { name: "Vadodara", position: { lat: 22.3072, lng: 73.1812 } },
  { name: "Jamshedpur", position: { lat: 22.8046, lng: 86.2029 } },
  { name: "Vijayawada", position: { lat: 16.5062, lng: 80.648 } },
  { name: "Visakhapatnam", position: { lat: 17.6868, lng: 83.2185 } },
  { name: "Coimbatore", position: { lat: 11.0168, lng: 76.9558 } },
  { name: "Madurai", position: { lat: 9.9252, lng: 78.1198 } },
  { name: "Kozhikode", position: { lat: 11.2588, lng: 75.7804 } },
  { name: "Kollam", position: { lat: 8.8932, lng: 76.6141 } },
  { name: "Thrissur", position: { lat: 10.5276, lng: 76.2144 } },
  { name: "Guntur", position: { lat: 16.3067, lng: 80.4365 } },
  { name: "Warangal", position: { lat: 17.9689, lng: 79.5941 } },
  { name: "Nashik", position: { lat: 20.5937, lng: 73.773 } },
  { name: "Amravati", position: { lat: 20.932, lng: 77.7523 } },
  { name: "Aurangabad", position: { lat: 19.8762, lng: 75.3433 } },
  { name: "Solapur", position: { lat: 17.6599, lng: 75.9064 } },
  { name: "Sangli", position: { lat: 16.8524, lng: 74.5815 } },
  { name: "Kolhapur", position: { lat: 16.705, lng: 74.2433 } },
  { name: "Akola", position: { lat: 20.7096, lng: 77.002 } },
  { name: "Latur", position: { lat: 18.4088, lng: 76.5604 } },
  { name: "Jalgaon", position: { lat: 21.1458, lng: 75.3855 } },
  { name: "Dhule", position: { lat: 20.9015, lng: 74.7774 } },
];

const indiaZoom = 5;

function ViewUsersOnMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.MODE.GOOGLE_API_KEY_CREDENTIALS,
  });

  const [selectedCity, setSelectedCity] = useState(null);
  const [usersLocation, setUsersLocation] = useState([]);

  useEffect(() => {
    getUsersLocation();
  }, []);

  async function getUsersLocation() {
    try {
      let response = await axios("/auth/getlocation");
      console.log("users location", response);
      setUsersLocation(response.data.location);
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  }

  const handleMarkerClick = (city) => {
    setSelectedCity(city);
  };

  const handleCloseInfoWindow = () => {
    setSelectedCity(null);
  };

  return isLoaded ? (
    <>
      <Heading size="md" mb={5}>
        YOU CAN SEE USERS ON THE MAP.
      </Heading>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={indiaCenter}
        zoom={indiaZoom}
      >
        {usersLocation.length > 0 &&
          usersLocation.map(
            (city, index) => (
              console.log(typeof city.lat),
              (
                <Marker
                  key={index}
                  // position={city.position}
                  position={{
                    lat: city.lat || parseFloat(city.lat),
                    lng: city.long || parseFloat(city.long),
                  }}
                  onClick={() => handleMarkerClick(city)}
                />
              )
            )
          )}
        {/* {selectedCity && (
          <InfoWindow
            position={selectedCity.position}
            onCloseClick={handleCloseInfoWindow}
          >
            <div>
              <h3>{selectedCity.name}</h3>
            </div>
          </InfoWindow>
        )} */}
      </GoogleMap>
    </>
  ) : (
    <Loading />
  );
}

export default React.memo(ViewUsersOnMap);
