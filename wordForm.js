class Form {
    constructor(inputPos, submitButtonPos, expectedResponse) { // These parameters are for positioning of the inputs/buttons
        // So we can create forms like this on the fly.
        this.input = createInput("Your answer?");
        this.submitButton = createButton("Check your answer");
        this.inputPos = inputPos;
        this.submitButtonPos = submitButtonPos;
        this.expectedResponse = expectedResponse;
    }

    display() {
        background(bgImage); // Keep this to preserve background in all cases
        this.input.show();
        this.submitButton.show();
        this.input.position(this.inputPos.x, this.inputPos.y);
        this.submitButton.position(this.submitButtonPos.x, this.submitButtonPos.y);

        this.submitButton.mousePressed(() => {
            this.checkAnswer();
            console.log("submitted answer")
        })
    }

    hide() {
        this.input.hide();
        this.submitButton.hide();
        console.log("hide function was called");
    }

    checkAnswer() {
        if (this.expectedResponse === this.input.value()) {
            this.hide();
            console.log("correct answer");
        }

        //if (exp) {
           // push();
            //fill("red");
            //text("Incorrect answer. Try again!", this.inputPos.x, this.inputPos.y + 30);
            //pop();
        //}
    }
}