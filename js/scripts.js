function pigLatin(userInput) {
  let splitUserInput = userInput.split(' ');
  console.log(splitUserInput);
}

function pigLatin(userInput) {
  let splitUserInput = userInput.split(' ');
  console.log(splitUserInput);
  for (let i = 0; i < splitUserInput.length; i++) {
    for (let j = 0; j < splitUserInput[i].length; j++) {
      console.log(splitUserInput[i][0]);
    }
  }
}

function pigLatin(userInput) {
  let splitUserInput = userInput.split(' ');
  console.log(splitUserInput);
  for (let i = 0; i < splitUserInput.length; i++) {
    for (let j = 0; j < splitUserInput[i].length; j++) {
      if (splitUserInput[i][0].match(/\b[aeiou]*/g)) {
        console.log(splitUserInput[i].concat("way"));
      }
    }
  }
}


array = ["Are, "you"];
array = [0][0];
array = [0][1];


function pigLatin(userInput) {
    let newOutput = "";
    let vowels = ['a','e','i','o','u']

  if (userInput.match(vowels)) {
    newOutput = userInput + "way";
    return newOutput;
  } else {
  return userInput;
  }
}



// splitUserInput[i][0].match(/[aeiou]/g)




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
//     add these letters to (userinput.match...true)
//  }


// for (let i = 0; i < splitUserInput.length; i++) {
//    for (let j = 0; j < splitUserInput[i][j]; j++) {
//      if (splitUserInput[i][j] is a vowel) {
 //         add "way"
//      } else if (splitUserInput[i][j] is a cons {
  //        move all first consecutive consonants to the end and add "ay"
// }
//}