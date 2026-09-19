export function findOutlier(arr: number[]): number {
    const evens = arr.filter(n => n % 2 === 0);
    const odds = arr.filter(n => n % 2 !== 0);

    return evens.length === 1 ? evens[0] : odds[0];
}
