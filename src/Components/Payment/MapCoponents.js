// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const MapComponents = ({ onLocationSelect, latitude, longitude }) => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "500px", // Adjust the height as needed
//   };

//   const center = {
//     lat: parseFloat(latitude),
//     lng: parseFloat(longitude),
//   };

//   const handleMapClick = (e) => {
//     const clickedLatitude = e.latLng.lat();
//     const clickedLongitude = e.latLng.lng();

//     // Pass the clicked latitude and longitude to the parent component's callback function
//     onLocationSelect({ latitude: clickedLatitude, longitude: clickedLongitude });
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={15}
//         onClick={handleMapClick}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponents;


// import React from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const MapComponents = () => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "500px",
//   };

//   const center = {
//     lat: 20, // Set the latitude of the center of the country
//     lng: 0,  // Set the longitude of the center of the country
//   };

//   const mapOptions = {
//     zoom: 4, // Adjust the zoom level as needed
//     center: center,
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         options={mapOptions}
//       />
//     </LoadScript>
//   );
// };

// export default MapComponents;



import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponents = ({ onLocationSelect }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 20, // Set the latitude of the center of the country
    lng: 0,  // Set the longitude of the center of the country
  };

  const mapOptions = {
    zoom: 4, // Adjust the zoom level as needed
    center: center,
  };

  const handleMapClick = async (e) => {
    const clickedLatitude = e.latLng.lat();
    const clickedLongitude = e.latLng.lng();

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickedLatitude},${clickedLongitude}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data,"Complete Data of Location Mark")
        if (data.results && data.results.length > 0) {
          const address = data.results[1].formatted_address;
console.log(address,": Address Name of Particular")
          // Pass the clicked location details to the parent component's callback function
          onLocationSelect({
            latitude: clickedLatitude,
            longitude: clickedLongitude,
            address: address,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        options={mapOptions}
        onClick={handleMapClick}
      >
        {/* Marker for the center */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponents;
