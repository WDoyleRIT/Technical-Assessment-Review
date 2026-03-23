let button = document.querySelector('.API');
let input = document.querySelector('#pokemonInput');

const clickHandler = async () => {
    const pokeName = input.value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    const response = await fetch(url);
    const data = await response.json();
    input.value = null;
    console.log();
}

button.addEventListener('click', clickHandler);