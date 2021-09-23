// Implement breedFetcher //

// dependencies
const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    // console.log(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`);

    if (error) {
      callback(error.message, null);
      return;
    }

    // #### ---> failure
    // if 404
    if (response.statusCode === 404) {
      callback(`Status Code: ${response && response.statusCode}, Request Failed.`, null); // Print the response status code if a response was received
      return;
    }
    // parse api string array-obj
    const parsedBreed = JSON.parse(body); // puts it into JSON object

    // if breed not found, return err
    if (parsedBreed[0].name !== breedName) {
      callback(`Error: ${breedName} not found as breed.`, null); // Print the error if one occurred
      return;
    }
        
    // ######## --> success
    // callback (parsedBreed);
    callback(null, `The breed description for ${breedName}: ${parsedBreed[0].description}`);
  });
};

module.exports = fetchBreedDescription;