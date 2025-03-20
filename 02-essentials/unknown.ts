function process(val: unknown) {
  val.log(); // Throws error because you need type checks
}

function process2(val: unknown) {
  if (
    typeof val === 'object' && // check type of val
    !!val && // check if val is truthy
    'log' in val && // check that val even has a log property to call
    typeof val.log === 'function' // check that it's a function that can be called) {
  ) // Could have just typed as any, but then you could get strings...which famously don't have a log function haha
  {
    val.log();
  }
}