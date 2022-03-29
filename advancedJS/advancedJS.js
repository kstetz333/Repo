let button = document.querySelector("#btnClick").addEventListener("click",changeHeader);
function changeHeader(event){
    document.querySelector("#userMessage").innerText = "Working, Please Wait";
    setTimeout( changeHeaderBack, 5000);
}
function changeHeaderBack(){
    document.querySelector("#userMessage").innerText = "Waiting";
}
//___________________________API For FetchAPI.html_____________________________________________________
