// 81607717edaaa3e6b5ab4d644e5bc3d8
// https://api.darksky.net/forecast/81607717edaaa3e6b5ab4d644e5bc3d8/36.1988542,-115.2659777

const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/81607717edaaa3e6b5ab4d644e5bc3d8/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;