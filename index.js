function Book(Name, Author, Type) {
  this.Name = Name;
  this.Author = Author;
  this.Type = Type;
}

let libraryForm = document.getElementById("libraryForm");

function Display() {}

Display.prototype.add = function (book) {
  console.log("Adding to UI");
  let tableBody = document.getElementById("tableBody");
  let UIString = `
            <tr>
            <td>${book.Name}</td>
            <td>${book.Author}</td>
            <td>${book.Type}</td>
            </tr>`;
  tableBody.innerHTML += UIString;
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("Form Submited");
  e.preventDefault();
  let Name = document.getElementById("bookName").value;
  let Author = document.getElementById("author").value;
  let Type;

  let fiction = document.getElementById("fiction");
  let nonFiction = document.getElementById("nonFiction");
  let programming = document.getElementById("programming");

  if (fiction.checked) {
    Type = fiction.value;
  } else if (nonFiction.checked) {
    Type = nonFiction.value;
  } else if (programming.checked) {
    Type = programming.value;
  }

  let book = new Book(Name, Author, Type);
  console.log(book);

  let display = new Display();
  display.add(book);
  display.clear();
}
