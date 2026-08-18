import {splitEvenOdd} from './utils/splitOddEvenNumber'

const testNumbers = [0, 2, -3, 3, 7, 10, -1, 11, 13, -100]

describe('Odd and Even Kata', () => {
    it('should return an object ', () => {
        expect(typeof splitEvenOdd(testNumbers)).toBe('object')
    });

    it('should return an object that contains an array of only odd numbers ', () => {
        expect(splitEvenOdd(testNumbers).oddNumbers).toEqual([3, 7, 11, 13])
    });

    it('should return an object that contains an array of only even numbers ', () => {
        expect(splitEvenOdd(testNumbers).evenNumbers).toEqual([2, 10])
    });
})