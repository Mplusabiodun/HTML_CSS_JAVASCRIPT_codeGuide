// Wrapping it in a new promise object, makes the difference and wy of consuming it
function getData(url) {
    return new Promise((resolve, reject) => {
      if (url == null) {
        reject("No URL provided");
      }
  
      // Load content of a page from url
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.status);
        }
      };
    });
  }

  const url = prompt("Enter a URL");


const promises = [
    getData('https://reqres/.in/api/unknown/2'),
    getData('https://reqres/.in/api/users/2'),
    getData('https://reqres/.in/api/unknown'),
]

  // Promise.all() is a method that takes an array of promises and return a new promise
  // It runs in parallel and returns an array of results
Promise.all(promises)
.then((result) => {
  console.log("Success!", result);
}).catch(status => {
  console.log(`An error with the status code ${status} occured`);
});

  
  // Promise.race() - This waits only for the first settled promise and get its result (or error)
Promise.race(promises)
.then((result) => {
  console.log("Success!", result);
}).catch(status => {
  console.log(`An error with the status code ${status} occured`);
});

  // Promise.any() - This waits only for any  of the first succesful/fulfillrd promise
  Promise.any(promises)
.then((result) => {
  console.log("Success!", result);
}).catch(status => {
  console.log(`An error with the status code ${status} occured`);
});