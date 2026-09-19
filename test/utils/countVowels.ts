export function countVowels(str: string): number {
    return str.split('').filter(char => 'aeiou'.includes(char)).length;
}
