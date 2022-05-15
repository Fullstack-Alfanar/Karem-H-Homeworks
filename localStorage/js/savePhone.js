
document.getElementById("save1").addEventListener("click", function () {
    let phone = document.getElementById("phone");
    if (phone.value == null) {
        alert("enter your phone number");
        return;
    }
    else {
        localStorage.setItem("PhoneN", phone.value);
        phone.value = "";
    }
});

document.getElementById("load1").addEventListener("click", function () {
    alert(localStorage.getItem("PhoneN"));
});


