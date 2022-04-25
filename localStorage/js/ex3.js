let users = [];
document.getElementById("save").addEventListener("click", function () {
    let fname = document.getElementById("fullName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    if (fname.length < 2 || fname.length > 30 || phone.length != 10 || email.length < 2 || email.length > 30) {
        fname.value = "";
        phone.value = "";
        email.value = "";
        alert(" invalid data");
        
        return;
    }
    let obj = {
        user_fullName: fname,
        user_phoneNumber: phone,
        user_email: email
    }
    users.push(obj);

    localStorage.setItem("data", JSON.stringify(users));
    fname.value = "";
    phone.value = "";
    email.value = "";
});