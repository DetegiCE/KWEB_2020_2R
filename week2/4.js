const obj = {x:1, y:2, z:3};
const {x, z, y, v = 10} = obj;
const {y: y1} = obj;

console.log(x, z, y);