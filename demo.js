function rollDie() {
    let roll = Math.floor(Math.random() * 3) +1;
    console.log(`Rolled: ${roll}`);
}

function throwDice() {
    rollDie();
    rollDie();
    rollDie();
}

// function greet(nickname) {
//     console.log(`Hi, ${nickname}!`);
// }