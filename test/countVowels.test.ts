import { countVowels } from './utils/countVowels';

describe('countVowels kata', () => {
    it('should count vowels in a regular string', () => {
        expect(countVowels('abracadabra')).toBe(5);
    });

    it('should return 0 for a string with no vowels', () => {
        expect(countVowels('gym')).toBe(0);
    });

    it('should return 0 for an empty string', () => {
        expect(countVowels('')).toBe(0);
    });

    it('should handle spaces', () => {
        expect(countVowels('hello world')).toBe(3);
    });

    it('should not count y as a vowel', () => {
        expect(countVowels('why')).toBe(0);
    });

    it('should count all vowels', () => {
        expect(countVowels('aeiou')).toBe(5);
    });
});
