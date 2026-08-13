import { product } from "./utils/persistenceKata"

describe('persistence kata', () => {
  it('should return 3 for the number 39', () => {
    expect(product(39)).toBe(3)
  })

  it('should return 0 for the number 4', () => {
    expect(product(4)).toBe(0)
  })

  it('should return 4 for the number 999', () => {
    expect(product(999)).toBe(4)
  })
} )