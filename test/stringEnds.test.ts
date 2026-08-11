import {solution} from './utils/stringEnds'

describe('test second input ends with first input ending words',()=>{
    it ('should give true for correct second input',() => {
        expect(solution('abcd','cd')).toBe(true)
    })
})