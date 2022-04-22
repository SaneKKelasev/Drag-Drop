const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (let placeholer of placeholders) {
    placeholer.addEventListener('dragover', dragover);
    placeholer.addEventListener('dragenter', dragenter);
    placeholer.addEventListener('dragleave', dragleave);
    placeholer.addEventListener('drop', dragdrop);
}


function dragstart(event) {
    event.target.classList.add("hold");
    setTimeout(() => {
        event.target.classList.add("hide");
    },0);
}

function dragend(event) {
    event.target.classList.remove("hold", "hide");
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add("hover");
}

function dragleave(event) {
    event.target.classList.remove("hover");
}

function dragdrop(event) {
    event.target.classList.remove("hover");
    event.target.append(item);
}