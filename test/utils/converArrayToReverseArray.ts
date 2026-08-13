export function digitize(num: number): number[] {
  let array1 = Array.from(num.toString()).map(Number);
  return array1.reverse()
};