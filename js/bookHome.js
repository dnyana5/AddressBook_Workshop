let personList;
window.addEventListener('DOMContentLoaded', (event)=>{
  personList = getaddressBookDataFromStorage();
  document.querySelector(".person-count").textContent = personList.length;
  createInnerHtml();
});

const getaddressBookDataFromStorage = () => { 
  return localStorage.getItem('AddressBookList') ?
             JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => { 
  if(personList.length == 0) return;
  const headerHtml = "<tr><th>Full Name</th><th>Phone Number</th><th>Address</th><th>City</th>"+
                      "<th>State</th><th>Zip</th><th>Actions</th></tr>";
  let innerHtml = `${headerHtml}`;
  for (const personBookData of personList) {
        innerHtml = `${innerHtml}                   
    <tr>
      <td>${personBookData._name}</td>
      <td>${personBookData._number}</td>
      <td>${personBookData._address}</td>
      <td>${personBookData._city}</td>
      <td>${personBookData._state}</td>
      <td>${personBookData._zip}</td>
      <td>
        <img name="${personBookData._name}" onclick="remove(this)" alt="delete"
          src="../assets/icon/delete-black-18dp.svg">
        <img name="${personBookData._name}"  alt="edit" onclick="update(this)"
          src="../assets/icon/create-black-18dp.svg">
      </td>
    </tr>
    `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}
