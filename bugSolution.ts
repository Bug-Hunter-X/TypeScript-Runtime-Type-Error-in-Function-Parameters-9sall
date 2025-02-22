function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be numbers');
  }
  return a + b;
}

let result = add(1, 2);
console.log(result); 

//this will throw an error
//let result2 = add("1", 2); 
//console.log(result2); 