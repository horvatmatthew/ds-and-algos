
// it contains
// ["sumit","amit","anil","anish"]
var set1 = new Set(["sumit","sumit","amit","anil","anish"]);
 
// it contains 'f', 'o', 'd'
var set2 = new Set("fooooooood");
 
// it contains [10, 20, 30, 40]
var set3 = new Set([10, 20, 30, 30, 40, 40]);
 
 // it is an  empty set
var set4 = new Set();

set1.add('bob');

console.log(set1);

set1.delete('amit');

console.log(set1);

console.log(set1.has('anil'));

console.log(set1.keys());
console.log(set1.values());

set1.forEach(x => console.log(x));