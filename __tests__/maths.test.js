//importing single modules, as their own objects to be applied as standalone methods/functions eg returnItteratedArray
const {returnItteratedArray} = require("../mathsModules");

// console.log(returnItteratedArray)
// console.log(returnItteratedArray(1,2))

test("Testing a basic test with no imports! Does 2+2 = 4? :", ()=>{expect(2+2).toBe(4)})

test("Return an array, counting up 0.1, between the specified values: ", ()=>{
    let actualResult = returnItteratedArray(1,2)
    let expectedOutput = [1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9];
    expect(actualResult).toStrictEqual(expectedOutput)
    expect(actualResult.length).toBe(expectedOutput.length)
    expect(typeof actualResult).toBe(typeof expectedOutput)
})