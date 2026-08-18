export function splitEvenOdd(num: number[]){
    const oddAndEvenNumber: {oddNumbers: number[], evenNumbers: number[]} = {oddNumbers:[],evenNumbers:[]}
    num.map((item: number) => {
        if( item > 0){
          item % 2 === 0 ?oddAndEvenNumber.evenNumbers.push(item):oddAndEvenNumber.oddNumbers.push(item)
        }
    })
    return oddAndEvenNumber
}
