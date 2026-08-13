export function palindroneChecker (str: string){
    let processedInput = str.toLocaleLowerCase().replace(/[^a-z]/g, '')
    let reveresedInput = processedInput.split('').reverse().join('')
    return processedInput === reveresedInput
}