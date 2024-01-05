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
//https://reqres.in/api/users?page=2

const url = prompt("Enter a URL");
// Consuming the promise
getData(url)
  .then((result) => {
    console.log("Success!");
    console.log(result);
  }).catch(status => {
    console.log(`An error with the status code ${status} occured`);
  });
