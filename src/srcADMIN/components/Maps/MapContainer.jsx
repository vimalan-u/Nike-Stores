import React, { Component } from "react";
import { Map, GoogleApiWrapper, DirectionsRenderer } from "google-maps-react";

class MapContainer extends Component {
  state = {
    directions: null,
  };

  // Function to calculate directions
  calculateDirections = (google, start, end) => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  };

  componentDidMount() {
    const { google, start, end } = this.props;
    this.calculateDirections(google, start, end);
  }

  render() {
    const { google } = this.props;
    const { directions } = this.state;

    return (
      <Map
        google={google}
        zoom={14}
        initialCenter={{
          lat: 37.774929,
          lng: -122.419416,
        }}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: import.meta.env.MODE.GOOGLE_API_KEY_CREDENTIALS,
})(MapContainer);
