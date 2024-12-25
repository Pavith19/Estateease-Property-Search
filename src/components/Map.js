import React from 'react';

const Map = ({ location, lat, lng }) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed`

  return (
      <div className="map-container">
      <h3>Location</h3>
      <p>Address: {location}</p>
        <iframe
        width="100%"
      height="450"
        frameBorder="0"
          src={googleMapsUrl}
        title="Google Maps"
      allowFullScreen>
      </iframe>
    </div>
  );
};

export default Map;