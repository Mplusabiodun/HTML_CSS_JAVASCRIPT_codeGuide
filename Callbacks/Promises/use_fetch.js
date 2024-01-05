const url = prompt("Enter a URL");

// Using fetch to get data from URL,
fetch(url)
  .then((response) => {
return response.json
  }).then((result) => {
        console.log(`Success!`, result);
      }).catch(status => {
    console.log(`An error with the status code ${status} occured`);
  });
