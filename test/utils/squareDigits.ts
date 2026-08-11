export function squareDigits(num: number): number {
    return Number([...String(num)].map(n => Number(n) ** 2).join(''))
    
}

/*function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};*/
