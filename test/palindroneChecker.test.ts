import {palindroneChecker} from './utils/palindroneChecker'

describe('palindroneChecker', () => {
    test('should return true for racecar', () => {
        expect(palindroneChecker('racecar')).toBe(true)
    })

    test('should return false for car', () => {
        expect(palindroneChecker('car')).toBe(false)
    })

    test('should return true for A man a plan a canal Panama', () => {
        expect(palindroneChecker('A man a plan a canal Panama')).toBe(true)
    })
})