const paragraph = document.querySelector("#content-text");
const changeTextButton = document.querySelector("#change-text");
const styleBox = document.querySelector("#style-box");
const itemList = document.querySelector("#item-list");
const itemStatus = document.querySelector("#item-status");
const color = document.querySelector("#change-color");
const size = document.querySelector("#change-size");
const itemAdd = document.querySelector("#add-item");
const itemRemove = document.querySelector("#remove-item");

changeTextButton.addEventListener("click",()=>{
    paragraph.textContent = "paragraph was changed"
});

let changedBackground = false;
let largeText = false;
color.addEventListener("click", () => {
    changedBackground = !changedBackground
    styleBox.style.backgroundColor = changedBackground ? "#dcfce7" : ""
});

size.addEventListener("click", () => {
    largeText = !largeText;
    styleBox.style.fontSize = largeText ? "24px" : ""
});

itemAdd.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = `item ${(itemList.children.length + 1)}`
    itemList.appendChild(item);
    itemStatus.textContent = `items: ${itemList.children.length}`;
});

itemRemove.addEventListener("click", () => {
    const lastItem = itemList.lastElementChild;
    if(!lastItem){
        itemStatus.textContent = "list is alr empty"
        return;
    }
    lastItem.remove()
    itemStatus.textContent = itemList.children.length ? `items: ${itemList.children.length}` : "list empty"
});