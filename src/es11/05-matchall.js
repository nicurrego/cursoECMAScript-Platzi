const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, BAnana Kiwi, Apple, orange, etc. etc. etc.';

for (const match of fruit.matchAll(regex)){
  console.log(match);
  
}
let a = 'b';
console.log(a);
