// let newPromise = new Promise((resolve, reject) => {
//   // define what the actual promise is
//   let a = 1 + 1;
//   if (a == 3) {
//     resolve("Success!");
//   } else {
//     reject("Failed!");
//   }
// });

// // .THEN - this is for RESOLVE - "do this when it succeeds"
// newPromise.then((message) => {
//   // message - here it's resolve("success!")
//   console.log(`This is in the "then" ${message}`);
// });

// // .CATCH - this is for REJECT - "do this when it fails"
// newPromise.catch((message) => {
//   // message - here it's reject("Failed!")
//   console.log(`This is in the "catch" ${message}`);
// });
// // console.log(newPromise);

// ----------------------------------------------------------------
const promise1 = new Promise((resolve, reject) => {
  resolve("Resolve Message_1!");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Resolve Message_2!");
});

const promise3 = new Promise((resolve, reject) => {
  resolve("Resolve Message_3!");
});

// PROMISE.ALL - inside we send it in an ARRAY
// of all the diff promises we want to run.
// These are all run at the exact same time
let promAll = Promise.all([promise1, promise2, promise3]).then((messages) => {
  console.log(`These are the resolve messages: ${messages}`);
});

// ----------------------------------------------------------------
// PROMISE.RACE - it will return as soon as the first one is completed
// instead of waiting for everything to complete
let promRace = Promise.race([promise1, promise2, promise3]).then((messages) => {
  console.log(`The first resolve message: ${messages}`);
});
