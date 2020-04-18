// Your code goes here

//Mouseenter Event Listener
const logoBackground = document.querySelector(".logo-heading");
  logoBackground.addEventListener("mouseenter", () => {
    logoBackground.style.backgroundColor = "violet";
  })

//On Click Transform to Larger
const bigButton = document.querySelectorAll(".btn");
bigButton.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.transform = "scale(2)";
    })
})
 
//MouseOver
const p = document.querySelector('p');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.innerHTML = 'MOUSE OVER detected';
}

//MouseOut
function logMouseOut() {
  p.innerHTML = 'MOUSE OUT detected';
}

//On Double Click Transform to larger
const card = document.querySelectorAll('.btn');
card.forEach((element) => {
element.addEventListener('dblclick', () => {
  element.style.transform = "scale(4)";
})
})

//Change content of Let's Go to Hello
const oldContent = document.querySelector('.text-content h2');
const setNewContent = oldContent.addEventListener('mousedown', (event) => {
  event.preventDefault();
  event.target.textContent = `Hello`
});

//OnContextMenu
document.querySelector("footer").addEventListener("contextmenu", () => {
  var x = document.querySelector("footer");
  x.textContent = "Where do you think you're going?";
  x.style.fontSize = "30px";
})

//Change font color of nav links
const navLinks = document.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("mouseleave",  (e) => {
      link.style.color = "purple";
    })
    })

//preventDefault
    var y = document.querySelector("nav").addEventListener("click", (e) => {
      event.preventDefault();
    })

//Hide image
    const busImg = document.querySelector(".intro img");
    busImg.addEventListener("mouseenter", (e) => {
      busImg.style.visibility = "hidden";
    })

// //Nested
//     var z = document.querySelectorAll(".destination p").addEventListener ("click", (e) => {
//       z.style.color = "green";
//       event.stopPropagation();
//     })

//stop propogation
const getBottomSection = document.querySelector('.destination p');
function stopEventPropogation() {
  const setBottomSection = getBottomSection.addEventListener('click', (e) => {
    event.target.textContent = "It's Me!";
    event.stopPropagation();

  });
};

const funInTheSunCard = document.querySelector('.destination');
  funInTheSunCard.addEventListener("click", (e) => {
    event.target.textContent = "It's you!";
    event.stopPropogation();
  })

stopEventPropogation();