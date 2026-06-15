const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        document.getElementById("result").innerHTML =
        "Please fill all fields.";
        return;
    }

    document.getElementById("result").innerHTML =
    "Message Submitted Successfully!";

    form.reset();

});