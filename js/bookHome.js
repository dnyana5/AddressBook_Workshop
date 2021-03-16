window.addEventListener('DOMContentLoaded', (event)=>{
  createInnerHtml();
});

const createInnerHtml = () => { 
  const headerHtml = "<tr><th>Full Name</th><th>Phone Number</th><th>Address</th><th>City</th>"+
                      "<th>State</th><th>Zip</th><th>Actions</th></tr>";
  let innerHtml = `${headerHtml}`;
  let personBookList = createAddressBookJSON();
  for (const personBookData of personBookList) {
        innerHtml = `${innerHtml}                   
    <tr>
      <td>${personBookData._name}</td>
      <td>${personBookData._phoneNumber}</td>
      <td>${personBookData._address}</td>
      <td>${personBookData._city}</td>
      <td>${personBookData._state}</td>
      <td>${personBookData._zip}</td>
      <td>
        <img name="1" onclick="remove(this)" alt="delete"
          src="../assets/icon/delete-black-18dp.svg">
        <img name="1"  alt="edit" onclick="update(this)"
          src="../assets/icon/create-black-18dp.svg">
      </td>
    </tr>
    `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}
const createAddressBookJSON = () => {
  let personBookListLocal = [
      {
          _name: 'Akhil',
          _phoneNumber: '7895632142',
          _address:'ABC chowk,pune',
          _city: 'Pune',
          _state: 'Maharashtra',
          _zip: '411006',
      },
      {
          _name: 'Pandurang',
          _phoneNumber: '8895632142',
          _address:'police colony,Thane',
          _city: 'Thane',
          _state: 'Maharashtra',
          _zip: '498566',
      }
  ];
  return personBookListLocal;
}