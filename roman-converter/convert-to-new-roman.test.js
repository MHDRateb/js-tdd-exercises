function convertToNewRoman(number) {
    var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var result = "";
    if (Number.isInteger(number)) {
        for (var i = 0; i <= arabicNumbers.length; i++) {
            while (arabicNumbers[i] <= number) {
                result += romanNumbers[i];
                number -= arabicNumbers[i];
            }
        }
        return result;
    }
    else {
        return "Please note that:you pass no number/floating number/string/undifined/NAN"
    }
}

/* write the tests */
test('convertToNewRoman should return I for 1', function () {
    var result = convertToNewRoman(1);
    expect(result).toBe('I');
});

test('convertToNewRoman should return XIV for 14', function() {
    var result = convertToNewRoman(14);
    expect(result).toBe('XIV');
});

test('convertToNewRoman should return CMXLIV for 944', function() {
    var result = convertToNewRoman(944);
    expect(result).toBe('CMXLIV');
});

test('convertToNewRoman should return warning for no number/floating number/string/undifined/NAN', function() {
    var result = convertToNewRoman();
    expect(result).toBe("Please note that:you pass no number/floating number/string/undifined/NAN");
});

test('convertToNewRoman should return warning for string/undifined/NAN', function() {
    var result = convertToNewRoman("18");
    expect(result).toBe("Please note that:you pass no number/floating number/string/undifined/NAN");
});