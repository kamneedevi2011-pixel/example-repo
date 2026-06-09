const words = [
    "Creative Writer",
    "Public Speaker",
    "Presentation Designer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let currentChars = "";

function type() {

    if (wordIndex < words.length) {

        currentWord = words[wordIndex];
        currentChars = currentWord.slice(0, ++charIndex);

        document.getElementById("typing").textContent = currentChars;

        if (currentChars.length === currentWord.length) {
            wordIndex++;
            charIndex = 0;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

            setTimeout(type, 1200);
        } else {
            setTimeout(type, 100);
        }
    }
}

type();

window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(".skill-card");

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });

});