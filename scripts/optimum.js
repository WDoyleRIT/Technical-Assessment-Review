const counterBtn = document.getElementById("counterBtn");
const resetBtn = document.getElementById("resetBtn");
const APIinput = document.querySelector(".APIinput");
const APIbtn = document.querySelector("#APIbtn");
const APIstatus = document.querySelector(".status");
const APIimage = document.querySelector(".APIimg");
const toDoList = document.querySelector(".tdList");
const listHeader = document.querySelector(".listHeader");
const listInput = document.querySelector(".listInput");
const listButton = document.querySelector("#listButton");
let count = 0;
let tasks = 0;

counterBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

listButton.addEventListener("click", () =>{
    if(listInput.value){
    addItem(listInput.value);
    listInput.value = null;
    }
});

function updateCounter() {
  counterBtn.textContent = `Times Clicked: ${count}`;
  console.log(`Counter updated to ${count}`);
}

const handleAPICall = async () => {
  const query = APIinput.value; // Get user input
  if(!query){
    APIstatus.textContent = "Search field is empty";
    return;
  }
  APIstatus.textContent = "Loading, please wait."
  let url = `https://pokeapi.co/api/v2/pokemon/${query}`; // Create url
  try {
    const response = await fetch(url); // Create promise
    const data = await response.json(); // Parse data
    APIinput.value = null; // Optional, reset search bar
    console.log(data);
    let pokeID = data.id;
    let pokeImage = data.sprites.front_default;
    APIstatus.textContent = `Successfully loaded Pokemon Number ${pokeID}`;
    APIimage.src = `${pokeImage}`;
  } catch (error) {
    APIstatus.textContent = "Invalid Pokemon Name, Please Try Again";
  }
};

APIbtn.addEventListener("click", handleAPICall);

function listUpdate(){
    tasks = toDoList.getElementsByTagName('li').length;
    listHeader.textContent = `${tasks} things to do:`
}

function addItem(input){
    const newItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newItem.textContent = input;
    newItem.append(checkbox);
    toDoList.appendChild(newItem);
    listUpdate();
}

toDoList.addEventListener("change" , (e) => {
    const checkedBox = e.target;
    if(checkedBox.checked){
        checkedBox.closest('li')?.remove();
    }
    listUpdate();
});

listUpdate();


