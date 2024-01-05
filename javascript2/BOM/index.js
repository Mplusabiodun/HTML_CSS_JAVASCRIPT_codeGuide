// With the help of BOM, we can get the location we're currently on
console.log(location.href);

// Changing or redirecting a location
if (confirm("Direct me to Google")) {
  location.href = "http://www.google.com";
}
// reloading a page
if (confirm("Reload this page for me")) {
  location.reload();
}

// Changing location with parameter
if (confirm("Direct me to Google and search (this called with parameter)")) {
  location.href = "http://www.google.com?q=javascript";
}

/*
  WINDOW NAVIGATOR - 
  Gives specific information
   */

// Gives browser name details
console.log("You're browsing from " + navigator.userAgent);

// Gives browser language
console.log("Your browser is using this language " + navigator.language);

// Gives browser vendor
console.log("You're using an engine created by " + navigator.vendor);

// Get user location
/* 
    navigator.geolocation.getCurrentPosition((position) => {
    alert(
        `you're at ` + position.coords.latitude + ", " + position.coords.longitude
    );
    }); 
*/
