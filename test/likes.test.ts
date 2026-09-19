import { likes } from './utils/likes';

describe('likes kata', () => {
    it('should return "no one likes this" for empty array', () => {
        expect(likes([])).toBe('no one likes this');
    });

    it('should return "Peter likes this" for one person', () => {
        expect(likes(['Peter'])).toBe('Peter likes this');
    });

    it('should return "Jacob and Alex like this" for two people', () => {
        expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    });

    it('should return "Max, John and Mark like this" for three people', () => {
        expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
    });

    it('should return "Alex, Jacob and 2 others like this" for four people', () => {
        expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
    });

    it('should return correct "others" count for five people', () => {
        expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Leo'])).toBe('Alex, Jacob and 3 others like this');
    });
});
