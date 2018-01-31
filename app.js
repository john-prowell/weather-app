const request = require('request');
const yargs = require('yargs');

const argv = yargs

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  var lat = body.results[0].geometry.location.lat;
  var lng = body.results[0].geometry.location.lng;
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log('Latitude: ' + lat);
  console.log('Longitude: ' + lng);
});