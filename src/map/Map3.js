import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

function Map3() {

  // const mapProps = {
  //   center: {lat: 59.95, lng: 30.33},
  //   zoom: 1
  // };

  return(
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDO_tX2d2ZcYFuiF-SKDJnew-fP_ODj6dI"
      >
        <GoogleMap
          id='map-card-2'
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
          zoom={15}
          center={{
            lat: -23.581447,
            lng: -46.666470
          }}
        >
          <Circle
            // optional
            onLoad={circle => {
              console.log('Circle onLoad circle: ', circle)
            }}
            // optional
            onUnmount={circle => {
              console.log('Circle onUnmount circle: ', circle)
            }}
            // required
            center={{
              lat: -23.581447,
              lng: -46.666470
            }}
            // required
            options={{
              strokeColor: '#00ACED',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#00ACED',
              fillOpacity: 0.35,
              clickable: false,
              draggable: false,
              editable: false,
              visible: true,
              radius: 300,
              zIndex: 1
            }}
          />
        </GoogleMap>
      </LoadScript> 
    </>
  );
}

export default Map3;