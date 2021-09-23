// Implement breedFetcher //

// dependencies
const request = require('request');

// extract breed entered from cmd line
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breedss/search?q=${breed}`, (error, response, body) => {
  // if 404
  if (response.statusCode === 404) {
    console.log(`Status Code: ${response && response.statusCode}, Request Failed.`); // Print the response status code if a response was received
    return;
  }
  // parse api string array-obj
  const parsedBreed = JSON.parse(body); // puts it into JSON object

  // if breed not found, return err
  if (parsedBreed[0].name !== breed) {
    console.log(`Error: ${breed} not found as breed.`); // Print the error if one occurred
    return;
  }
  // console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body); // first determine data format
  console.log(typeof parsedBreed); // now it's an obj structure

  // console.log(parsedBreed);
  console.log(`The breed description for ${breed}: ${parsedBreed[0].description}`);
});