function isEmailValid(email) {
    let strudelCnt = 0, dotCnt = 0, strudelLocation;
    for (let i = 0; i < email.length; i++){
        if (email[i] == '@') {
            strudelLocation = i;
            strudelCnt++;
        }
        if (email[i] == ' ') {
            return "Invalid email";
        }
    }
    if (strudelCnt != 1)
        return "Invalid email";
    if (email[0] == '@') {
        return "Invalid email";
    }
    i = 0;
    while (email[i] != '@') {
        if (email[i] == '?') {
            return "Invalid email";
        }
    }
    for (i = strudelLocation; i < email.length; i++) {
        if (email[i] == '_') {
            return "Invalid email";
        }
        if (email[i] == '.') {
            dotCnt++;
        }
    }
    if (dotCnt == 0) {
        return "Invalid email";
    }
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            if (i <= 64) {
                return "Invalid email";
            }
        }
    }
    return "valid email";
}

let test = isEmailValid(prompt("enter your email"));
console.log(test);