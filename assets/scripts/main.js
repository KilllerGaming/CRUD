const addBtn = document.querySelector(".add-icon")
const input = document.querySelector("#input")
const container = document.querySelector(".list-container")



function add() {
	let task = input.value

	let listItem = document.createElement('div')
	listItem.classList.add('list-item')

	let checkbox = document.createElement('input')
	checkbox.setAttribute("value", "1")
	checkbox.setAttribute("name", "r")
	checkbox.setAttribute("type", "checkbox")

	let label = document.createElement('label')
	label.setAttribute("for", "1")
	label.setAttribute("contenteditable", "true")
	label.innerHTML = task

	let trashA = document.createElement('button')
	trashA.classList.add('trash')
	trashA.id = 'trash'

	let trashIco = document.createElement('i')
	trashIco.classList.add('fa-solid', 'fa-trash')

	trashA.appendChild(trashIco)

	listItem.appendChild(checkbox)
	listItem.appendChild(label)
	listItem.appendChild(trashA)

	container.appendChild(listItem)

	trashA.addEventListener("click", function () {
		container.removeChild(listItem);
		saveData();
	});

	input.value = null;

	saveData();

}

function saveData() {
	localStorage.setItem("data", container.innerHTML)
}

function showTask() {
	container.innerHTML = localStorage.getItem("data");
}

function removeTask(listItem) {
  container.removeChild(listItem);
  saveData();
}

function attachEventListeners() {
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("trash")) {
      const listItem = event.target.closest(".list-item");
      if (listItem) {
        removeTask(listItem);
      }
    }
  });
}

attachEventListeners();
showTask();