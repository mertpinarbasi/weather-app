const geocode = require("./utils/geocode");
const weatherStack = require("./utils/weatherstack");
const yargs = require("yargs");
const request = require("postman-request");
let command = yargs.argv._[0];
if (command) {
  geocode(command, (error, geolocation) => {
    if (error) {
      console.log("Error", error);
    } else {
      //  console.log("Data", data);
      weatherStack(geolocation, (error, data) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log(
            `${data.location},${data.country} is currently ${data.current}°C`
          );
        }
      });
    }
  });
} else {
  console.log("Please enter a location argument. ");
}
