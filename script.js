'use strict';

/* Takes in the array's length and returns a random number from 0 to excluding 
the length of the array. */
const randomIndex = (lengthOfArray) => {
  return Math.floor(Math.random() * lengthOfArray);
};

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
    "Nothing is impossible. The word itself says 'I'm possible!'",
    'Keep your face always toward the sunshine, and shadows will fall behind you',
    'Belief creates the actual fact.',
    'In a gentle way, you can shake the world.',
    'Wake up determined, go to bed satisfied.',
  ],
};

// Function that displays the random message.
const displayRandomMessage = () => {
  // Getting random messages everytime the program is run.
  const getName = messages.names[randomIndex(messages.names.length)];
  const getSarcasm = messages.sarcasm[randomIndex(messages.sarcasm.length)];
  const getInspiration =
    messages.inspiration[randomIndex(messages.inspiration.length)];
  return (
    'Welcome, you must be ' +
    getName +
    '!\n' +
    'Sarcasm: ' +
    getSarcasm +
    '\n' +
    'Inspiration: ' +
    getInspiration +
    '\n'
  );
};

console.log(displayRandomMessage());
