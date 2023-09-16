function typeAndClear(sentences) {
  const letterElement = document.getElementById("learn");
  const delay = 500; // 1-second delay
  let sentenceIndex = 0;

  async function typeSentence(sentence) {
    for (let char of sentence) {
      letterElement.textContent += char;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    letterElement.textContent = "";
  }

  async function typeAndClearAll() {
    while (true) {
      await typeSentence(sentences[sentenceIndex]);
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
  }

  typeAndClearAll();
}

const sentences = [
  "HTML IS GOOD LANGUAGE",
  "CSS",
  "JAVASCRIPT"
];

typeAndClear(sentences);

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
        let ownname = ["Hey, Welcome.", "I'm kishan", "I'm happy to see you here"]
        typeText(ownname, "ownname");

function updateBotInfo() {
      fetch('/api/bot-info')
        .then(response => response.items)
        .then((data) => {
        console.log(data);
        });
}
updateBotInfo();

 



