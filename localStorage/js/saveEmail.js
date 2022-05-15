if(localStorage.getItem("Email")){
    document.getElementById("save1").addEventListener("click", function () {
        let email = document.getElementById("email");
        if (email.value == null) {
            alert("enter your email");
            return;
        }
        else {
            localStorage.setItem("Email", email.value);
            email.value="";
        }
    });
    
    document.getElementById("load1").addEventListener("click", function(){
        alert(localStorage.getItem("Email"));
    });
}

