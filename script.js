
const newBookForm = document.querySelector("#newBookForm");
newBookForm.style.display = "none";
const AddBookbtn = document.querySelector(".add-book");
let btnClick = false;

// the constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read 
}


// library array
let myLibrary = [
    {
        title: "The Hoppit",
        author: "Luca",
        pages: 200,
        read: false
    }
]

let newBook;

displayBook();
newBookForm.addEventListener('submit', addBookToLibrary);


function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
 
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBookForm.style.display = "none";
    displayBook();
    console.log(myLibrary);
 
 }




function displayBook() {
    let bookList = document.querySelector(".book-list");
    const books = document.querySelectorAll(".book-card");
    books.forEach(book => bookList.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        newBookList(myLibrary[i]);
    }
    
}

function newBookList(book) {
    const library = document.querySelector(".book-list");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement("div");
    const btnDiv = document.createElement('div');
    const btnRemoveBook = document.createElement("button");
    const btnReadBook = document.createElement("button");

    bookDiv.classList.add('book-card');
    bookDiv.setAttribute('id',myLibrary.indexOf(book));

    titleDiv.innerHTML = `${book.title}`;
    titleDiv.setAttribute('id',"title");
    bookDiv.appendChild(titleDiv);

    authorDiv.innerHTML = `by ${book.author} `;
    authorDiv.setAttribute('id','author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.innerHTML = `${book.pages} pages`;
    pagesDiv.setAttribute('id','pages');
    bookDiv.appendChild(pagesDiv);

    btnDiv.classList.add('btndiv');
    bookDiv.appendChild(btnDiv);

    btnReadBook.classList.add('read-book');
    btnDiv.appendChild(btnReadBook);

    if (book.read === false) {
        btnReadBook.textContent = "Unread";
        btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";

    }else {
        btnReadBook.textContent = 'Read';
        btnReadBook.style.backgroundColor = "rgb(86, 160, 86)";
        btnReadBook.style.color = "white";
    };

    btnRemoveBook.classList.add('rm-book');
    btnRemoveBook.setAttribute('id', 'removeBook');
    btnRemoveBook.innerHTML = `
    <p style="margin: 0px">Remove</p>
    `;
    btnDiv.appendChild(btnRemoveBook);

    library.appendChild(bookDiv);

    btnRemoveBook.addEventListener('click' ,() => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        displayBook();

    });
    btnReadBook.addEventListener('click',() => {
        book.read = !book.read;
        displayBook();
    });

}

if (btnClick == false) {
    AddBookbtn.addEventListener('click', addBook);
    btnClick = true;

}else if (btnClick == true) {
    AddBookbtn.removeEventListener();
}

function addBook() {
    newBookForm.style.display = 'flex';
    newBookForm.style.flexDirection = 'column';
    newBookForm.style.alignItems = 'center';

    const titleText = document.querySelector("#title");
    titleText.value = "";

    const authorText = document.querySelector("#author");
    authorText.value = "";

    const pagesText = document.querySelector("#pages");
    pagesText.value = "";

    const readChecked = document.querySelector("#read");
    readChecked.checked = false;
}







