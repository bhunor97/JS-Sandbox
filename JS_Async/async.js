// SYNC and AWAIT
// ^ syntactical sugar, wrapped around promises easier to work with

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve(`Google says hi`);
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

// SIMPLIFYING THIS SECTION - does the same thing tho
// makeRequest("Goole")
//   .then((response) => {
//     console.log("Response Reveived");
//     return provessRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  // AWAIT - The code should wait until this 'makeRequest' is finished...
  // ...and then afterwards it will execute the next thing
  try {
    // TRY - put all the code inside that could potentially fail
    const response = await makeRequest("Google");
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();
