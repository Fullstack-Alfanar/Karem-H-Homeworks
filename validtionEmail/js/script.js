function isEmailValid(email) {
    let strudelCnt = 0, dotCnt = 0, strudelLocation=0;
    for (let i = 0; i < email.length; i++){
        if (email[i] == '@') {
            strudelLocation = i;
            strudelCnt++;
        }
        if (email[i] == ' ') {
            return "false";
        }
    }
    if (strudelCnt != 1)
        return "false";
    if (email[0] == '@') {
        return "false";
    }

    for (let i = 0; i < email.length || email[i]=='@'; i++){
        if(email[i]=='?')
        return "false"
    }
    
    i = 0;
    for (i = strudelLocation; i < email.length; i++) {
        if (email[i] == '_') {
            return "false";
        }
        if (email[i] == '.') {
            dotCnt++;
        }
    }
    if (dotCnt == 0) {
        return "false";
    }
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            if (i >= 64) {
                return "false";
            }
        }
    }
    return "true";
}

let test = isEmailValid(prompt("enter your email"));
console.log(test);