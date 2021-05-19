let newPromise = new Promise((resolve, reject) => {
  // define what the actual promise is
  let a = 1 + 1;
  // define what the actual promise is
  if (a == 3) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

// .THEN - this is for RESOLVE - if the promise runs successfully
newPromise.then((message) => {
  // message - here it's resolve("success!")
  console.log(`This is in the "then" ${message}`);
});

// .CATCH - this is for REJECT - if the promise fails
newPromise.catch((message) => {
  // message - here it's reject("Failed!")
  console.log(`This is in the "catch" ${message}`);
});

console.log(newPromise);
