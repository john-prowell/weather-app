// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');


// const argv = yargs.options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// console.log(argv);

// //81607717edaaa3e6b5ab4d644e5bc3d8
// // https://api.darksky.net/forecast/81607717edaaa3e6b5ab4d644e5bc3d8/36.1988542,-115.2659777

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/81607717edaaa3e6b5ab4d644e5bc3d8/36.1988542,-115.2659777',
  json: true
}, (error, response, body) => {
  console.log(body.currently.temperature);  
}
);