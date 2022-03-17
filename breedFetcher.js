const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length > 0) {
      let description = data[0]["description"];
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };