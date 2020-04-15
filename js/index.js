// Your code goes here
// mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick
// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation items from refreshing the page by using preventDefault()

//My attempt at Focus Event Listener
const logoMouse = document.querySelector(".logo-heading");
  logoMouse.addEventListener("mouseenter", function() {
    logoMouse.style.backgroundColor = "red";
  })


  