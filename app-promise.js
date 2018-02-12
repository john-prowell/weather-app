const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  console.log(argv);

  var encodedAddress = encodeURIComponent(argv.address); // encode address for url
  var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address='${encodedAddress}`;

  axios.get(geocodeUrl).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    //console.log(error);
    if (error.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.');
    }
  }) ;
  