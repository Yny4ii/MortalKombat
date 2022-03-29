const player1 = {
    name: "Liukang",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['kunai', 'sword'],
    attack: function () {
        console.log(`${this.name} Fight..`)
    }
}

const player2 = {
    name: "Scorpion",
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['kunai', 'arms'],
    attack: function (){
        console.log(`${this.name} Fight..`)
    }
}


const $arenas = document.querySelector('.arenas');

const createPlayer = (playerClass, hero) => {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $life.innerText = hero.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = hero.name;

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = hero.img;


    $character.appendChild($img);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $arenas.appendChild($player);
}
createPlayer('player1', player1);
createPlayer('player2', player2);

