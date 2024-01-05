// A Promise call clean handle multiple asynchronous operations
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
  //https://reqres.in/api/users/2  => testing link
  
  const url = prompt("Enter a URL");
  // Consuming the promise
  getData(url)
    .then((result) => {
      console.log("Success!", result);
        return getData('https://reqres/.in/api/unknown/2')
    }).then((result) => {
        console.log("Success 2!", result);
          return getData('https://reqres/.in/api/users/2')
      }).then((result) => {
        console.log("Success 3!", result);
          return getData('https://reqres/.in/api/unknown')
      }).catch(status => {
      console.log(`An error with the status code ${status} occured`);
    });
  