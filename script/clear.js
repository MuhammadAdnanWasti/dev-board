


document.getElementById("clear-his").addEventListener("click", function () {
    let task1=document.getElementById("contents");

    while (task1.firstChild) {
        task1.removeChild(task1.firstChild);
    }
   
})