class WordForm {
    constructor() {
        this.wordInput = createInput("Unscrambled word?");
        this.submitButton = createButton("Check your answer");
    }

    display() {
        background("lightblue");
        this.wordInput.position(width / 2, height / 2);
        this.submitButton.position(width / 2, (height / 2) + 100);
    }
}