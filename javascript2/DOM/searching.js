/*
   Get element by its Id name
*/
let h2 = document.getElementById("h1_text");

h2.style.color = "red";
h2.innerText = "I just change the inner text";
console.log(h2);

/*
   Get element by its className
*/
let h1 = document.getElementsByClassName("my_table");
console.log(h1);
 for (let table of h1){
    table.style.backgroundColor = "green"
 }

/*
   Get element by Tag name
*/
let h1_tag = document.getElementsByTagName("h1")
console.log(h1_tag)




         /*QUERY SELECTOR 
         This return ONLY THE FIRST element that 
         matches the criteria passed in
         */
// Get element by Query selector - irrespective of how many elements/ids/class with the tag passed in, its going to select the first one
let h1_query = document.querySelector("tr")
console.log(h1_query)
// Query selector with tag
let query_tag = document.querySelector("tbody")
console.log(query_tag)

// Query selector with class - Remember it will always return the first element that meet the criteria irrespective how many they're
let query_class = document.querySelector(".my_table")
console.log(query_class)

// Query selector with ID
let query_id = document.querySelector("#h1_text")
console.log(query_id)


 /*QUERY SELECTOR ALL 
         This returns ALL the first element that 
         matches the criteria passed in
         */
let trs = document.querySelectorAll('tr')
console.log(trs)

let store = [] // we can store the trs in an array
for (let tr of trs){
   store.push(tr.innerText)
}
console.log(store)

// child combinator - walking through the elements till it reaches the one that satisfied it
let second_td = document.querySelector('table > tbody > tr td.this_particular')
console.log(second_td)

//Descendant combinator
let desCom = document.querySelector('body table tr th')
console.log(desCom)

let desCom2 = document.querySelectorAll('body table tr th')
console.log(desCom2)

//Adjascent sibling combinator
let adj = document.querySelector('body h1 + p')
console.log(adj)
















