// A CALLBACK WITH SUCCESS AND ERROR HANDLERS
function getData(url, success, error) {
  if (url == null) {
    return;
  }

  // Load content of a page from url
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url)
  xhr.send()
  xhr.onload = function () {
    if (xhr.status === 200) {
        success(xhr.responseText) // RUN SUCCESS CALLBACK
    } else {
        error(xhr.status)   // RUN ERROR CALLBACK
    }
    
  }
}

function success(result) {
  console.log("success");
  console.log(result);
}

function error(status) {
  console.log(`An error with the status code ${status} occured`);
}

const url = prompt("Enter a URL");

getData(url, success, error);
