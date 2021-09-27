class WordForm {
    constructor() {
        this.wordInput = createInput("Unscrambled word?");
        this.submitButton = createButton("Check your answer");
    }

    display() {
        background("lightblue"); // Keep this to preserve background in all cases
        this.wordInput.position((width / 2)-200, height / 2);
        this.submitButton.position((width / 2)-200, (height / 2) + 20);
    }
}