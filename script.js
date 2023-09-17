
const sentences = [
  "HTML IS GOOD LANGUAGE, AND EASY TO UNDERSTAND",
  "CSS IS ALSO A POPULAR LANGUAGE",
  "JAVASCRIPT"
];
typeText(sentences, "learn")

const words = [
"Hello, I'm Kishan, a 12th-grade student on an exciting journey into the world of web development. My current focus is on mastering JavaScript, HTML, CSS, and GitHub. Exploring the endless possibilities of web development has been a thrilling adventure, and I can't wait to see where it takes me!"
        ];

        

    function typeText(words, elementId) {
            let currentWordIndex = 0;
            let currentLetterIndex = 0;
            let isDeleting = false;
            const textContainer = document.getElementById(elementId);

            function type() {
                const currentWord = words[currentWordIndex];
                if (isDeleting) {
                    textContainer.textContent = currentWord.substring(0, currentLetterIndex - 1);
                    currentLetterIndex--;
                } else {
                    textContainer.textContent = currentWord.substring(0, currentLetterIndex + 1);
                    currentLetterIndex++;
                }

                const typingSpeed = 100; // Adjust the typing speed as needed

                if (!isDeleting && currentLetterIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, 200); // Wait for a second before starting to delete
                } else if (isDeleting && currentLetterIndex === 0) {
                    isDeleting = false;
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    setTimeout(type, 100); // Wait for half a second before typing the next word
                } else {
                    setTimeout(type, typingSpeed); // Continue typing
                }
            }

            type(); // Start the typing animation
        }

        typeText(words, "typing");
        let ownname = ["KISHAN"]
        typeText(ownname, "navtext");
//ytcard 
function div(he, p, icon){
let lang = document.getElementById("lang");
let card = document.createElement("div");
let para = document.createElement("p");
let head = document.createElement("h1");
let icons = document.createElement("ion-icon");
icons.setAttribute("name", icon);
head.textContent = he;
para.textContent = p;


card.classList.add("card", "boxshadow", "textshadow");
card.appendChild(icons)
card.appendChild(head)
card.appendChild(para)
lang.appendChild(card)
}

lang = [
  { "name": "HTML", "info": "THIS IS HTML", "icon":"logo-html5"},
  { "name": "CSS", "info": "THIS IS CSS", "icon":"logo-css3"},
  { "name": "JAVASCRIPT", "info": "THIS IS JAVASCRIPT", "icon":"logo-javascript"},
  {"name":"PYTHON", "info":"THIS IS PY", "icon":"logo-python"}
];
for(var i = 0; i < lang.length; i++){ 
div(lang[i].name, lang[i].info, lang[i].icon)
}

// Get references to the button and body elements
const darkThemeButton = document.getElementById('dark-theme-button');
const body = document.body;
const navbarcolor = document.getElementById("navbar");
  const themeicon = document.getElementById("osm");
// Add a click event listener to the button
darkThemeButton.addEventListener('click', () => {
  
    body.classList.toggle('dark-theme');
    navbarcolor.classList.toggle('navdark-theme');
   // themeicon.classList.toggle("themedark")

    function updateBotInfo() {
      fetch('/api/bot-info')
        .then(response => response.items)
        .then((data) => {
        console.log(data);
        });
}
updateBotInfo();

});
 



