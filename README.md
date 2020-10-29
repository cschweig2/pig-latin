Project to create pig latin function

Directions from lesson: 
Pig Latin
Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"? Read all instructions carefully before beginning.

For words beginning with a vowel, add "way" to the end.

For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

For words beginning with "y", treat "y" as a consonant.

Instructions
Before writing any code, make a list of specs detailing each behavior your program will have. Start with the simplest possible behavior, and slowly move up in complexity.

Have at least two other pairs check your specs before you begin coding. Ensure that each possible behavior is represented by a spec, and that they are ordered from simplest to most complex.

Place your specs (and their example inputs and outputs) in your project's README.

Now you're ready to start writing (and passing tests). Here's the process:

Write a test for the simplest possible behavior. We will get you started:
Describe: `pigLatin()`
Test: "It will add 'way' to the end of words that begin with a vowel"
Expect(pigLatin("a")).toEqual("away");
Write the smallest amount of code needed to get the test passing.

Test the code in the console, REPL, or JSFiddle.

Once the test is passing, commit your code.

Repeat the cycle above for each test. Do not move onto the next test until the previous one passes.

Once you've completed your business logic, feel free to add a user interface with jQuery so you can run your application in the browser. Do not add a UI until after you've written and tested all business logic.

Worked with Svea Wade (co-authored on GitHub)