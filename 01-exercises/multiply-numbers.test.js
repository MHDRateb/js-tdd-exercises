/*
    Similar to the add-numbers function, 
    write a function that multiplies any
    number of arguments passed to it.
    some expectations:
        multiply(4, 2)  // --> 8
        multiply(2, 2, 3)  // --> 12
    Write your implementation in TDD
        1. Add a Test (see it failing - RED)
        2. Write Code (to make it pass - GREEN)
        3. Refactor if needed
        4. REPEAT
 */
function multiply() {
  var args = Array.prototype.slice.call(arguments);
  var result =1;
  for (var i = 0; i < args.length; i++) {
    if (typeof (args[i]) === "number") {
           result *= args[i];
    }
    else {
      result = NaN;
    }
  }
  if (!isNaN(result)) {
    return result;
  }
  else {
    return "Please note that:There is one arugment is a string/NAN at lest"
  }

}



test('multiply should multiply two numbers', function () {
    var result = multiply(2, 2);
    expect(result).toEqual(4);
});


test('multiply should return 1 when we pass no number', function () {
    var result = multiply();
    expect(result).toEqual(1);
});


test('multiply should return the number when we pass one number', function () {
    var result = multiply(3);
    expect(result).toEqual(3);
});

test('multiply should return 0 when we pass zero', function () {
    var result = multiply(1, 0);
    expect(result).toEqual(0);
});

test('multiply should return warning when we pass one string/NAN at least', function () {
    var result = multiply(1, 2, "3");
    expect(result).toEqual("Please note that:There is one arugment is a string/NAN at lest");
});

test('multiply should return warning when we pass one string/NAN at least', function () {
    var result = multiply(1, 2, NaN);
    expect(result).toEqual("Please note that:There is one arugment is a string/NAN at lest");
});

test('multiply should return Infinity when we pass Infinity once at lest', function () {
    var result = multiply(1, 2, Infinity);
    expect(result).toEqual(Infinity);
});

test('multiply should return multiply two number when we pass math function', function () {
    var result = multiply(1, Math.LN2);
    expect(result).toBe(0.6931471805599453);
});

test('multiply should return multiply two number when we pass math function', function () {
    var result = multiply(3, Math.exp(0));
    expect(result).toBe(3);
});