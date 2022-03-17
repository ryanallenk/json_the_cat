const request = require('request');
const searchValue = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`, function (error, response, body) {
  if (error) {
    console.log(`Request failed: \n${error}`)
    return
  }
  const data = JSON.parse(body);
  if (data.length > 0) {
    description = data[0]["description"];
    console.log(description);
    return
  }
  console.log("Error: that breed cannot be found.")
});


