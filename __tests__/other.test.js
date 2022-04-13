//importing the modules and storing the file in a const to be accessed like otherModules.method
const otherModules = require("../otherModules");

test("Jest properly installed and configured??? :", () => {} )

test("Return the type for the given parameter: ", () => {
let actualOutput = otherModules.returnType(true);
let expectedOutput = "boolean";
expect(actualOutput).toBeDefined();
expect(actualOutput).toBe(expectedOutput);
expect(actualOutput).toBeTruthy();
})

test("Return a boolean stating whether the argument specified is listed in the array:", () => {
let actualOutput = otherModules.checkMyRecipe("tomatoes");
let expectedOutput = false;
expect(actualOutput).toBeDefined()
expect(actualOutput).toBe(expectedOutput);
expect(actualOutput).not.toBeTruthy()
})