document.getElementById("submit").onclick = function() {
    let book = new AddressBookData();
    book.name = document.getElementById("name").value;
    book.number = document.getElementById("number").value;
    book.address = document.getElementById("address").value;
    book.city = document.getElementById("city").value;
    book.state = document.getElementById("state").value;
    book.zip = document.getElementById("zip").value;
  
   
};