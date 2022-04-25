myCat = {
    Cname: "locy",
    Age: 2,
    Color: "gray",
    IsSterile: true
}

let string1 = JSON.stringify(myCat);
alert(string1);

let yourCat = JSON.parse(string1);

document.getElementById("cat1").innerHTML =
    Object.keys(yourCat)[0] + " : " + myCat.Cname + '<br>' +
    Object.keys(yourCat)[1] + " : " + myCat.Age + '<br>' +
    Object.keys(yourCat)[2] + " : " + myCat.Color + '<br>' +
    Object.keys(yourCat)[3] + " : " + myCat.IsSterile;

    
