export function CodeSmells() {
    /*
    * Argument Count Mismatch
    * */
    function add(a, b) {
        return a + b;
    }
    console.log(add(1));    // NaN → Fehler: Fehlt ein Argument
    console.log(add(1, 2, 3)); // 3 → Fehler: Ein Argument zu viel

    /*
    * Argument Type Mismatch
    * */
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(2, "text")); // NaN → Fehler: NaN, weil ein String übergeben wurde

    /*
    * Array Length Assignment
    * */
    let numbers = [1, 2, 3, 4, 5];
    numbers.length = 8;  // [ 1, 2, 3, 4, 5, <3 empty items> ]
    console.log(numbers);

    /*
    * Primitive Property Assignment
    * */
    let num = 10;
    num.foo = "bar";
    console.log(num.foo); // `undefined` → da `num` primitiv ist

    /*
    * Negative Array Index
    * */
    let arr = [10, 20, 30];
    console.log(arr[-1]); // `undefined` → obwohl erwartet wird, dass es 30 ausgibt

    /*
    * Duplicate Declaration
    * */
    var x = 5;
    var x = 10; // Kein Fehler in `var`, aber problematisch!
    let y = 5;
    let y = 10; // SyntaxError
    console.log(x)
    console.log(y)

    /*
    * Unreachable Code
    * */
    function test() {
        return "Done";
        console.log("Dieser Code wird nie ausgeführt!"); // Unreachable Code
    }
    console.log(test())

    /*
    * Loosely-Typed Variables
    * */
    let value = "Hello";
    value = 42; // Problematisch, weil der Typ sich ändert
    console.log(value)

    /*
    * Long Method Chaining
    * */
    let result = "hello"
        .trim()
        .toUpperCase()
        .split("")
        .reverse()
        .join("")
        .substring(0, 3);
    console.log(result); // Schwer lesbar

    /*
    * Long Parameter List
    * */
    function createUser(name, age, email, phone, address, country, zip) {
        return { name, age, email, phone, address, country, zip };
    }
    console.log(createUser("Julian", 24, "jumoit01@hs-esslingen.de", "123456", "Stuttgart", "ger", 70619))
}