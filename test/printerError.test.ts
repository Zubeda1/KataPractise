import { printerError } from "./utils/printerError";

describe("printerError", () => {
    it("no errors", () => {
    expect(printerError("aaabbbbhaijjjm")).toBe("0/14")
    })
    
    it("with errors", () => {
        expect(printerError("aaabbbbhaijjjm")).toBe("3/14")
        expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toBe("8/22")
    });
});
