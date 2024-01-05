const url = prompt("Enter a URL");

/* 
    async before a function turns it into a promise
    await ensures the function is executed before continuing, 
    Also note that we can use "await outside" an asyn function, its invalid 
*/
async function getData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

// consuming async/await function
(async () => {
    const result = await getData(url);
    console.log("success!", result);
  })();

// Old method of consuming the promise function (this still works for async/await too, buts its old method)
getData(url)
  .then((result) => {
    console.log(`Success!`, result);
  })
  .catch((status) => {
    console.log(`An error with the status code ${status} occured`);
  });


