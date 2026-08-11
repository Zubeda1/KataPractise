import { maskify } from './utils/maskify'

describe('maskify', () => {
    it('should maskify', () => {
        expect(maskify('123456789')).toBe('#####6789')
        console.log(maskify('123456789'))
    })
})