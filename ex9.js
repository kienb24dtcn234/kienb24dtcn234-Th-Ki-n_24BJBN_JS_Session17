let a = +prompt("nhap a");
let b = +prompt("nhap b");
let c = +prompt("nhap c");
let delta = (b * b) - (4 * a * c);
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);
alert(`x1 = ${x1} , x2 = ${x2}`);