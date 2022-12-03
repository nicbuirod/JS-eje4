function myFunction(obj) {
  let resultado = undefined;

  if (obj.a != null) {
    const obja = obj.a;
    if (obja.b != null) {
      resultado = obja.b;
    }
  }
  return resultado;
}

console.log(myFunction({ a: 1 }));
console.log(myFunction({ a: { b: { c: 3 } } }));
console.log(myFunction({ b: { a: 1 } }));
console.log(myFunction({ a: { b: 2 } }));
