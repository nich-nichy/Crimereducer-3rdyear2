import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const google = window.google;
const GoogleMap2 = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDxJSi1VeJpK-IUNQQwJQ-MZERbrleXpjQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap)
  (props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 10.565, lng: 77.348 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 10.565, lng: 77.348 }} />
    )}
  </GoogleMap>
));
export default GoogleMap2;
// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
