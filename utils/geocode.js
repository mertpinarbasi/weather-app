const request = require("postman-request");

const geocode = (address, callback) => {
  const geoUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoibWVydC1waW5hcmJhc2kiLCJhIjoiY2t0N2hrMGY1MHM1MTJ3bjk5Y2cyY2I1dCJ9.5B_Ie_sFw8TH8Hi902mSPg";

  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      callback("Can not reach the location services ! ", undefined);
    } else if (response.body.features.length === 0) {
      callback("Location could not find ", unable);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
        temperature: response.body.features[0].temperature,
      });
    }
  });
};

module.exports = geocode;
