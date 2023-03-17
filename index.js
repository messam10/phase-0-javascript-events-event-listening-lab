const button = document.getElementById("button");

function addingEventListener() {
    button.addEventListener("click", alert("I was clicked!"));
}

addingEventListener();