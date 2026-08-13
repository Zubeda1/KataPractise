export const product = (num:number) => {
  let count =0;
  while (num >= 10){
      num = num.toString().split('').reduce((product,digit) => product * Number(digit),1)
      count++;
  }
  return count
}