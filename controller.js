let itemCounter = 1;
let itemArray = [];


document.querySelector("#btnAlert").addEventListener("click",useBtn);
document.querySelector("#btnList").addEventListener("click", inputList);

function useBtn(event){
    
    itemArray.push(itemCounter);
    itemCounter = itemCounter+1;
    printList();
}
   function printList(){
        alert("Here is a list of items " + itemArray);
}
function inputList(event){
    let listItem = document.querySelector("#ListItem").value;
    itemArray.push(listItem);
    printList();
}