/**
 * This function is supposed to remove vowels from a phrase
 * Add tests to prove that it functions properly with these examples at least:
 *         removeVowels("goodbye")  // --> "gdby"
 *         removeVowels("node girls")  // --> "nd grls"
 *         removeVowels('how are you today?') // --> "hw r y tdy?"
 * Consider EDGE cases (how the function behaves if you pass undefined, or a number etc..)
 * Then add a test that contains CAPITAL vowel letters (hEllo for example)
 *      - It should expect the E to be removed
 *      - Run the tests and see you new test fail (RED)
 *      - Change the implementatino to remove the letter (capital and small letters)
 *       (maybe Google Case Insensitive Regular Expressions and read about regular expressions and see how you can use them)
 */

function removeVowels(phrase) {
  if (typeof (phrase) === "string"){
return phrase.replace(/[aeiou]|[AEIOU]/g, '');
  }
  else{
    return "Please note that:you pass number/undifined/NAN"
  }
}

//This is a sample test - remove it and write AT LEAST 5 more tests to prove the function works as expected  
test('removeVowels should remove the Os', function(){
    var result = removeVowels('Tom');
    expect(result).toBe('Tm');
});

test('removeVowels should remove the Vowels', function(){
    var result = removeVowels("goodbye");
    expect(result).toBe("gdby");
});

test('removeVowels should remove the Vowels', function(){
    var result = removeVowels("node girls");
    expect(result).toBe("nd grls");
});

test('removeVowels should remove the Vowels', function(){
    var result = removeVowels('how are you today?');
    expect(result).toBe("hw r y tdy?");
});

test('removeVowels should return waring when you pass number/undifined/NAN', function(){
    var result = removeVowels(3);
    expect(result).toBe("Please note that:you pass number/undifined/NAN");
});

test('removeVowels should remove the Vowels(Capital and small)', function(){
    var result = removeVowels("hEllo wrOld -- bye");
    expect(result).toBe("hll wrld -- by");
});