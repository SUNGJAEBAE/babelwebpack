import sum from './module1.js';
import bb, {multiply,aa} from './module2.js';

sum(3,4);
multiply(2,9);

const str='es6';
console.log(`javascript ${str}`);

let arr=[1,2,3,4];
arr.forEach(el => {
    console.log(el);
});

console.log(...arr);