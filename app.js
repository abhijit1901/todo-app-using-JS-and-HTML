let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
    let taskName = input.value.trim().replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, ' ');

    if (taskName === "") return;

    let task = document.createElement("li");
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Remove";
    deleteButton.classList.add("remove");

    task.innerText = taskName;
    task.appendChild(deleteButton);
    ul.appendChild(task);

    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
        let listItem = event.target.parentElement;
        listItem.style.opacity = "0";
        setTimeout(() => listItem.remove(), 300); // Smooth fade-out effect
    }
});
