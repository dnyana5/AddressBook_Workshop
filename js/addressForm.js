window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
  
    const number = document.querySelector('#number');
    const numberError = document.querySelector('.number-error');
    number.addEventListener('input', function() {
        if (number.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBookData()).number = number.value;
            numberError.textContent = "";
        }catch (e) {
            numberError.textContent = e;
        }
    });
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        if (address.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBookData()).address = address.value;
            addressError.textContent = "";
        }catch (e) {
            addressError.textContent = e;
        }
    });
});

const save = () => {
    try {
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    }
    catch (e) {
        return;
    }
  }

  function createAndUpdateStorage(addressBookData) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined)
        addressBookList.push(addressBookData);
    else
        addressBookList = [addressBookData];
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}
  

  const createAddressBook = () => {
    let addressBookData = new AddressBookData();
    try{
        addressBookData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    addressBookData.name = getInputValueById('#name');
    addressBookData.number = getInputValueById('#number');
    addressBookData.address = getInputValueById('#address');
    addressBookData.city = getInputValueById('#city');
    addressBookData.state = getInputValueById('#state');
    addressBookData.zip = getInputValueById('#zip');
    alert(addressBookData.toString());
    return addressBookData;
  }
  
  
  const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  }

  const resetForm = () => {
    setValue('#name', ' ');
    setValue('#number', '');
    setValue('#address', '');
    setValue('#city', '');
    setValue('#state', '');
    setValue('#zip', '');
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}