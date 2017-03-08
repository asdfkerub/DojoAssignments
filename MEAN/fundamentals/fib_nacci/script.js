function fib() { // 3
  var total = 0; // 2
  var sum = 1; // 2
  var counter = 0;
  function nacci() {
    total = total + sum
    console.log(total);
    sum = total  - sum;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
 fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
