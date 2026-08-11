import { findShort } from './utils/shortestWord'

describe('test the length of shortest word', () => {
    it('should return 3', () => {
        expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3)
        expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3)
    })
})
