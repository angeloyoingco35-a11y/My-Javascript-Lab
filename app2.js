console.log ("Javascript console 1");
console.log("System initialization started...");

const alertBox = document.getElementById("status-notification");

const updatebtn = document.getElementById("update-btn");
 updatebtn.addEventListener("click", function(){
    
});

function updater() {    
    alertBox.innerHTML ="<strong><h1>Update Banner<h1></strong>"

}

updatebtn.addEventListener("click", updater);
