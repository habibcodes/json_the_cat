// breedFetcherTest.js

const fetchBreedDescription = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The breed description for Siberian: The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns "Error breed not found as breed."', (done) => {
    fetchBreedDescription(null, (err, desc) => {
      
      const expectedErr = `Error: ${null} not found.`; // the 404 return here
      
      // we do expect an error for this scenario
      assert.equal(err, expectedErr);
      // compare returned description
      assert.equal(desc, null);

      done();
    });
  });
});