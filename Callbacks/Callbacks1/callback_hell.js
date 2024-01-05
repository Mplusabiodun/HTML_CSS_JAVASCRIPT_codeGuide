// A CALLBACK DEPENDING IN THE PREVIOUS RESULT (MULTIPLE CALLBACKS)
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
          success(xhr.responseText) 
      } else {
          error(xhr.status)  
      }
      
    }
  }
  
  function successHandler(result) {
    console.log("success");
    console.log(result);
  }
  
  function errorHandler(status) {
    console.log(`An error with the status code ${status} occured`);
  }
  
  const url = prompt("Enter a URL");
  
  // Using multiple callbacks can result in callback hell
  getData(url, (res1) => {
    console.log('success 1', res1);
    getData('https://reqres/.in/api/users/1', (res2) =>{
        console.log('success 2', res2);
        getData(url, (res3) =>{
            console.log('https://reqres/.in/api/users/2', res3);
            getData('https://reqres/.in/api/users/2', successHandler, errorHandler)
          }, errorHandler);
      }, errorHandler);
  }, errorHandler);
  