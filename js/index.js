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

//Mouseenter Event Listener
const logoBackground = document.querySelector(".logo-heading");
  logoBackground.addEventListener("mouseenter", () => {
    logoBackground.style.backgroundColor = "red";
  })

//On Click
const bigButton = document.querySelectorAll(".btn");
bigButton.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.transform = "scale(2)";
    })
})

//Prevent Nav from Refreshing
// document.getElementByClass("nav-link").addEventListener("click", function(event){
//   event.preventDefault()
// })

// // //Attempt at animation(doesn't work & I don't get it)
// var x = document.getElementByClass("img-content");

// // // Code for Chrome, Safari and Opera
// x.addEventListener("animationstart", () => {
//   console.log("Animation started");
// })
 
//MouseOver
const p = document.querySelector('p');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.innerHTML = 'MOUSE OVER detected';
}

function logMouseOut() {
  p.innerHTML = 'MOUSE OUT detected';
}

//On Double Click
const card = document.querySelectorAll('.btn');
card.forEach((element) => {
element.addEventListener('dblclick', () => {
  element.style.transform = "scale(4)";
})
})

//change content of Let's Go to Hello
const oldContent = document.querySelector('.text-content h2');
const setNewContent = oldContent.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.textContent = `Hello`
});

//OnContextMenu
document.querySelector("footer").addEventListener("contextmenu", () => {
  var x = document.getElementById("demo");
  x.innerHTML = "Where do you think you're going?";
  x.style.fontSize = "30px";
})

const navLinks = document.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click",  (e) => {
      link.style.color = "purple";
    })
    })

    const busImg = document.querySelector(".intro img");
    busImg.addEventListener("click", (e) => {
      busImg.style.visibility = "hidden";
    })

    
//stop propogation
const getBottomSection = document.querySelector('.destination p');
function stopEventPropogation() {
  const setBottomSection = getBottomSection.addEventListener('click', (event) => {
     event.stopPropagation();
     event.target.textContent = "It's Me!";
  });
};
stopEventPropogation();