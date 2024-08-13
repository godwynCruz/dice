function rollDice() {
    const numberOfDice = document.getElementById("number_of_dice").value;
    const diceResult = document.getElementById("dice_result");
    const diceImages = document.getElementById("dice_images");
    const values = [];
    const images = [];

    for(let dice = 0; dice < numberOfDice; dice++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src ="Images/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}