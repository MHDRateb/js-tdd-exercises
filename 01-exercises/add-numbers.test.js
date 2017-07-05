/**
 * Even a simple function like addNumber could have bugs
 * Add tests to prove that our adder works
 *         add(1, 2)  // --> 3
 *         add(2, 1, 3)  // --> 6
 * Consider Edge Cases:
 *      - What if we pass only one number? no numbers?
 *      - How can we trust the input of the function??
 *          - Add a Test passing a string instead of a number i.e. add('1', 2) - what happens? Is that what you expect
 *          - Improve the function to handle this case
 *      - Any more Edge cases?
 *      - Check JEST documentation and use methods other than toBe()
 * 
 */

function add() {
    // this line converts whatever is passed to the function into an array
    // read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    var args = Array.prototype.slice.call(arguments);
    var result = 0;
    if (arguments.length !== 0) {
        for (var i = 0; i < args.length; i++) {
            var current = args[i];
            if (typeof current === "number" && !isNaN(current) ) {
                result += args[i];
            }
            else {
                console.error("Please note that:There is one arugment is a string/NAN at lest");
            }
        }
    }
    else {
        console.error("Please note that:you didn't enter any number");
    }
    return result;
}


//This is a sample test - remove it and write AT LEAST two more tests to prove the function works as expected  
test('add should add two numbers', function () {
    var result = add(1, 2);
    expect(result).toEqual(3);
});


test('add should return 0 with error message that there is no number when we pass no number', function () {
    var result = add();
    expect(result).toEqual(0,"Please note that:you didn't enter any number");
});


test('add should return the number when we pass one number', function () {
    var result = add(1);
    expect(result).toEqual(1);
});

test('add should return 0 when we pass two equal numbers postive and negative', function () {
    var result = add(1, -1);
    expect(result).toEqual(0);
});

test('add should return the result with error message when we pass one string/NAN at least', function () {
    var result = add(1, 2, "3");
    expect(result).toBe(3,"Please note that:There is one arugment is a string/NAN at lest");
});

test('add should return result with error message when we pass one string/NAN at least', function () {
    var result = add(1, 2, NaN);
    expect(result).toBe(3, "Please note that:There is one arugment is a string/NAN at lest");
});

test('add should return Infinity when we pass Infinity once at lest', function () {
    var result = add(1, 2, Infinity);
    expect(result).toEqual(Infinity);
});

test('add should return add two number when we pass math function', function () {
    var result = add(1, Math.LN2);
    expect(result).toBe(1.6931471805599454);
});

test('add should return add two number when we pass math function', function () {
    var result = add(1, Math.exp(0));
    expect(result).toBe(2);
});