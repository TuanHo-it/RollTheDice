const dices = document.getElementById('dices')
const roll = document.getElementById('roll')
const ul = document.getElementById('list')
const container = document.getElementById('container')

let numOnDice;
let dem = 0;
roll.addEventListener('click', () => {
    roll.disabled = true;
    dem++;
    dices.style.animation =  "";
    dices.style.animationPlayState = "running";
    for (let i = 1; i <= 5; i++) {
        let rd = Math.floor(Math.random() * 6) + 1;
        numOnDice = rd;
        setTimeout(() => {
            dices.src = `imgs/dice${rd}.png`;
        }, 500 * i)

    }
    //Add li
    setTimeout(() => {
        dices.style.animation = "none";
        const divList = document.createElement('div');
        const diceImg = document.createElement('img');
        divList.className = "divList";
        diceImg.className = "diceImg";
        diceImg.src = `imgs/dice${numOnDice}.png`;
        divList.textContent = `Roll ${dem}:` ;
        container.appendChild(divList);
        divList.appendChild(diceImg);
        roll.disabled = false;
    }, 500 * 6)

})






