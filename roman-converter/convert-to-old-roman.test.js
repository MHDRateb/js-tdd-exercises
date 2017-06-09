function convertToOldRoman(number) {
  var arabicNumbers = [1000, 500, 100, 50, 10, 5, 1];
  var romanNumbers = ["M", "D", "C", "L", "X", "V", "I"];
  var result = "";
if(Number.isInteger(number)){
for (var i = 0; i <= arabicNumbers.length; i++) {
    while (arabicNumbers[i] <= number) {
      result += romanNumbers[i];
      number -= arabicNumbers[i];
    }
  }
  return result;
}
else{
     return "Please note that:you pass no number/floating number/string/undifined/NAN"
}
  
}

/* write the tests */
test('convertToOldRoman should return I for 1', function() {
    var result = convertToOldRoman(1);
    expect(result).toBe('I');
});

test('convertToOldRoman should return XVIII for 18', function() {
    var result = convertToOldRoman(18);
    expect(result).toBe('XVIII');
});

test('convertToOldRoman should return MMM for 3000', function() {
    var result = convertToOldRoman(3000);
    expect(result).toBe('MMM');
});

test('convertToOldRoman should return warning for no number/floating number/string/undifined/NAN', function() {
    var result = convertToOldRoman();
    expect(result).toBe("Please note that:you pass no number/floating number/string/undifined/NAN");
});

test('convertToOldRoman should return warning for string/undifined/NAN', function() {
    var result = convertToOldRoman("18");
    expect(result).toBe("Please note that:you pass no number/floating number/string/undifined/NAN");
});