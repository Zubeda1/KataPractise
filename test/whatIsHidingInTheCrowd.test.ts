import {whatIsHidingInTheCrowd} from './utils/whatIsHidingInTheCrowd'

let word1 = "UcUNFYGaFYFYGtNUH"
let word2 = "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"
let word3 = "HELLO"
let word4 = "1h457aNnn83!ah??"
let word5 = "umbrella"
let word6 = "HeKlFJeGpJR GhGJTaJRnJE t"
let word7 = "123"
let word8 = ""

describe('WhatIsHidingInTheCrowd', () => {
    it('should correctly find the hidden word even with special characters and numbers', () => {
        expect(whatIsHidingInTheCrowd(word1)).toBe("cat");
        expect(whatIsHidingInTheCrowd(word2)).toBe("embezzlement");
        expect(whatIsHidingInTheCrowd(word4)).toBe("hannah");
    });

    it('should return "no words found" if there are no hidden words', () => {
        expect(whatIsHidingInTheCrowd(word3)).toEqual("no word found");
        expect(whatIsHidingInTheCrowd(word7)).toEqual("no word found");
    });
    it('should return a string', () => {
        expect(typeof whatIsHidingInTheCrowd(word1)).toBe("string");
    });
    it('should correctly find the hidden word if the string just has lower case letters', () => {
        expect(whatIsHidingInTheCrowd(word5)).toBe("umbrella")
    });
    it('should correctly find the hidden word if the string contains spaces', () => {
        expect(whatIsHidingInTheCrowd(word6)).toBe("elephant")
    });
    it('should return no word found when the string is empty', () => {
        expect(whatIsHidingInTheCrowd(word8)).toBe("no word found")
    })
    it('should return a string even if the string is empty', () => {
        expect(typeof whatIsHidingInTheCrowd(word8)).toBe("string")
    })
})