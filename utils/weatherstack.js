const request = require("postman-request");

const weatherstack = (address, callback) => {
  const weatherStackUrl = `http://api.weatherstack.com/current?access_key=70ef3a636ca02422ec2a5202a335797a&query=${address.latitude},${address.longitude}`;

  request({ url: weatherStackUrl, json: true }, (error, response) => {
    if (error) {
      callback("Can not reach the weather services ! ", undefined);
    } else if (response.body.request === undefined) {
      callback("Weather data can not find  ", unable);
    } else {
      callback(undefined, {
        location: response.body.location.region,
        country: response.body.location.country,
        current: response.body.current.temperature,
      });
    }
  });
};

module.exports = weatherstack;
