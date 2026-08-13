export function whatIsHidingInTheCrowd(word:string) { 
    word = word.replace(/[^a-z]/g, "");
    return word.length == 0 ? 'no word found' : word
}