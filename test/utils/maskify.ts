export function maskify(cc: string): string {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// return masked string
// function maskify(cc) {
//   cc = cc.split("");
//   for(var i = 0; i < cc.length - 4; i++){
//     cc[i] = "#";
// }

// cc = cc.join("");
// return cc
// }
