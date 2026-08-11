import { addBinary } from "./utils/addBinary";

describe("addBinary", () => {
    it("1 + 1 = '10'", () => {
        if (addBinary(1, 1) === "10") {
            console.log("yay");
        } else {
            console.log("nay");
        }
        expect(addBinary(1, 1)).toBe("10");
    })

    it("5 + 9 = '1110'", () => {
        expect(addBinary(5, 9)).toBe("1110")
        console.log(addBinary(5, 9));
    })
});
