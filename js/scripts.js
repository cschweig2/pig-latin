function pigLatin(userInput) {
  if (userInput.match(/\b[aeiou]/g)) {
    return true;
  } else {
    return false;
  }
};


// loop through string to find space then vowel and return true if one is found

// /[aeiou]/.test(userInput)
// userInput.match(/[aeiou]/g) === true