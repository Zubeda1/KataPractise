import { findOutlier } from './utils/findOutlier';

describe('findOutlier kata', () => {
    it('should find the single odd number', () => {
        expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
    });

    it('should find the single even number', () => {
        expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
    });

    it('should handle negative numbers', () => {
        expect(findOutlier([2, 4, 6, -3])).toBe(-3);
    });

    it('should work with minimum array size', () => {
        expect(findOutlier([1, 2, 3])).toBe(2);
    });
});
