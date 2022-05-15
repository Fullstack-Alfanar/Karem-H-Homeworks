let books = [];
books[0] = {
    Book_ID: "1234",
    Book_Name: "Don Quixote",
    Book_Author: "Miguel de Cervantes",
    Book_Price: 20
}
books[1] = {
    Book_ID: "5678",
    Book_Name: "Lord of the Rings",
    Book_Author: "J.R.R. Tolkien",
    Book_Price: 30
}
books[2] = {
    Book_ID: "9043",
    Book_Name: "Alice's Adventures in Wonderland",
    Book_Author: "C.S. Lewis",
    Book_Price: 25
}
let string1 = JSON.stringify(books);
alert(string1);

let items = [];
items = JSON.parse(string1);
// let string2=JSON.stringify(items);
// console.log(string2);
for (let i = 0; i < 3; i++) {
    document.write(Object.keys(items[i])[0]+" : "+ items[i].Book_ID);
    document.write("<br>");
    document.write(Object.keys(items[i])[1]+" : "+ items[i].Book_Name);
    document.write("<br>");
    document.write(Object.keys(items[i])[2]+" : "+ items[i].Book_Author);
    document.write("<br>");
    document.write(Object.keys(items[i])[3]+" : "+ items[i].Book_Price);
    document.write("<br>");
    document.write("_______________________________________");
    document.write("<br>");
}