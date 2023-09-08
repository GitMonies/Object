let book1 = {
    title:"Goosebumps",
    genre:"Fiction",
    "year released": 1992,
}

// delete book1.title;


let key = prompt("What would you like to know about this book?", "title")
alert(book1[key])

let book2 = {
    title:"1984",
    genre:"Political Fiction",
    "year released": 1953,
}

book2.pages = "356";

let key2 = prompt("What would you like to know about this book?", "genre")
alert(book2[key2])
