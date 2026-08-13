import { digitize } from "./utils/converArrayToReverseArray"

describe("ConverArrayToReverseArray", () => {
    test("should return reverse array", () => {
        expect(digitize(3456)).toEqual([6,5,4,3])
    })

    test("should return reverse array with 0", () => {
        expect(digitize(1230)).toEqual([0, 3, 2, 1])
    })

    it("should return an array", () => {
    expect(Array.isArray(digitize(1234561))).toBe(true);
  })
})