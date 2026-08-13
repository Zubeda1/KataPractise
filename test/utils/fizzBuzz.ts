export function fizzBuzz(input:any){
 if(typeof input !== 'number')
    return 'string'
  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FIZZ BUZZ'
  if(input % 3 === 0)
    return 'FIZZ'
  if(input % 5 === 0)
    return 'BUZZ'
   if ((input %3 !== 0) && (input % 5 !==0))
    return input

}