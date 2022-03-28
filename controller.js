let itemCounter = 1;
let itemArray = [];
document.querySelector("#btnAlert").addEventListener("click",useBtn);
function useBtn(event){
   
    itemArray.push(itemCounter);
    itemCounter = itemCounter+1;
    printList()
    return itemArray;
}
   function printList(){
        alert("Here is a list of items " + itemArray);
}