const text = ["Web Developer", "Designer", "Freelancer"];

let count = 0;
let index = 0;

function type() {
    const element = document.querySelector(".typing");

    // safety check
    if (!element) return;

    let currentText = text[count];
    let letter = currentText.slice(0, ++index);

    element.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;

        if (count === text.length) {
            count = 0;
        }

        setTimeout(type, 1000);
    } else {
        setTimeout(type, 100);
    }
}

type();