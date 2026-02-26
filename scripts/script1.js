const formButton = document.querySelector("#formbutton");
const nameList = document.querySelector("#nameList");

formButton.addEventListener("click",function(){
const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const name = firstName.value + " " + lastName.value;
const newName = document.createElement("li");
newName.textContent = name;
nameList.appendChild(newName);
});