import {Sum} from "../components/Sum"
test("Sum function should return sum of two numbers",()=>{

    const result = Sum(2,9);

    //Assertion
    expect(result).toBe(9);
})