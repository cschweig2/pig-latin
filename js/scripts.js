function pigLatin(userInput) {
  const splitUserInput = userInput.split(' ');
  console.log(splitUserInput);
}






// function pigLatin(userInput) {
//   if (userInput.match(/\b(\w)[aeiou]/g)
//     return true;
//   } else {
//     return false;
//   }
// };

// Test: "Successfully select words that begin with a vowel"
// Expect: (pigLatin(userInput)).toEqual(true);

// function pigLatin(userInput) {
//   if (userInput.match(/\b[bcdfghjklmnpqrstvwxyz]/g)) {
//     return true;
//   } else {
//   return false;
//   }
// };


// Test: "Successfully select words that begin with a consonant"
// Expect(pigLatin(userInput)).toEqual(true);

// if (the first word starts with a vowel || there are other words that start with vowels {
  //   add these letters to (userinput.match...true)
//  }