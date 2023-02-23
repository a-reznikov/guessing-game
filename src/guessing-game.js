class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
    }

    guess() {
        this.result =   Math.round((this.maxNumber + this.minNumber) / 2);
        return this.result;
    }

    lower() {
        return this.maxNumber = this.result;
    }

    greater() {
        return this.minNumber = this.result;
    }
}

module.exports = GuessingGame;
