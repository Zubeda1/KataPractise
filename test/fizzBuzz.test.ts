import { fizzBuzz } from "./utils/fizzBuzz"

describe('fizzBuzz katas', () => {
  it('should return type of',() =>{
     expect(typeof fizzBuzz('word')).toBe('string')
     expect(typeof fizzBuzz(4)).toBe('number')
  })

  it('should return FIZZ', () => {
    expect(fizzBuzz(3)).toBe('FIZZ')
  })

  it('should return BUZZ', () => {
    expect(fizzBuzz(5)).toBe('BUZZ')
  })

  it('should return FIZZ BUZZ', () => {
    expect(fizzBuzz(15)).toBe('FIZZ BUZZ')
  })

  it('should return number', () => {
    expect(fizzBuzz(4)).toBe(4)
  })
})