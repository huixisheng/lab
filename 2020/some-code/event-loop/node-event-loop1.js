setTimeout(function timeout () {
  console.log('timeout');
},0);
setImmediate(function immediate () {
  console.log('immediate');
});

// ➜  some-code git:(master) ✗ node event-loop/node-event-loop1.js 
// timeout
// immediate
// ➜  some-code git:(master) ✗ node event-loop/node-event-loop1.js
// immediate
// timeout


const fs = require('fs')
fs.readFile(__filename, () => {
  setTimeout(() => {
      console.log('timeout1');
  }, 0);
  setImmediate(() => {
      console.log('immediate1');
  });
});

// ➜  some-code git:(master) ✗ node event-loop/node-event-loop1.js
// timeout
// immediate
// immediate1
// timeout1