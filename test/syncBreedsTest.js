const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    let expectOutcome = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
    const result = breedDetails('Bombay')
    assert.equal(expectOutcome, result);
  });
  it('returns breed details for the Balinese breed', () => {
    // We expect it to be a function, but will it be?
    let expectOutcome = 'The Bombay is a medium-size cat, well-balanced, friendly, alert, and outgoing; muscular and having a surprising weight for their size. Their body and tail is usually of medium length, their head rounded with medium-sized, wide-set ears, a moderate nose stop, which is visible, large rounded wide-set eyes.'
    const result = breedDetails('Balinese')
    assert.notEqual(expectOutcome, result);
  });
});

