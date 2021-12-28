'use strict';

// Object containing arrays of character names, sarcasms, and inspirational quotes.
const messages = {
  names: [
    'Snoobs Noseworthy',
    'Cornbread Winterkorn',
    'Pitchfork Ben Quakenbush',
    'Chewey Henderson',
    'Storyboard Snuggleshine',
    'Chad Kingfish',
    'Bad News Pinkerton',
    'Longbranch Porkins',
    'Greasy Jim Hootkins',
    'Stinky Jefferson',
    'Boxelder Wallbanger',
    'Chesterfield Breedslovetrout',
    'Worms Boogerbottom',
    'Wheezy Joe Swackhamer',
    'Butterbean McFadden',
  ],
  sarcasm: [
    'Silene is golden, duct tape is silver.',
    'Find your patience before I lose mine.',
    "Life's good, you should get one.",
    'Unless your name is Google stop acting like you know everything.',
    'Me pretending to listen should be enough for you.',
  ],
  inspiration: [
    'Nothing is impossible. The word itself says "I\'m possible!".',
    'Keep your face always toward the sunshine, and shadows will fall behind you.',
    'Belief creates the actual fact.',
    'In a gentle way, you can shake the world.',
    'Wake up determined, go to bed satisfied.',
  ],
};

/* Takes in the array's length and returns a random number from 0 to excluding 
the length of the array. */
const randomIndex = (lengthOfArray) => {
  return Math.floor(Math.random() * lengthOfArray);
};

const randomMessage = (array) => {
  const index = randomIndex(array.length);
  // Using the random index to access the array's element.
  return array[index];
};

// Function that displays the random message.
const displayMessage = () => {
  // Getting random messages everytime the program is run.
  return (
    'Welcome, you must be ' +
    randomMessage(messages.names) +
    '!\n' +
    'Sarcasm: ' +
    randomMessage(messages.sarcasm) +
    '\n' +
    'Inspiration: ' +
    randomMessage(messages.inspiration) +
    '\n'
  );
};

console.log(displayMessage());
