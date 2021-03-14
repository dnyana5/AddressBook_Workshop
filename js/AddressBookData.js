class AddressBookData {
    get id(){return this._id}
    set id(id){
        this._id = id;
    }
    get name() {return this._name;}
    set name(name) {
        this._name = name;
    }

    get number() {return this._number;}
    set number(number) {
        this._number = number;
    }

    get address() {return this._address;}
    set address(address) {
        this._address = address;
    }

    get city() {return this._city;}
    set city(city) {
        this._city = city;
    }

    get state() {return this._states;}
    set state(state) {
        this._state = state;
    }

    get zip() {return this._zip;}
    set zip(zip) {
        this._zip = zip;
    }

    //method
    toString() {
        return "id = "+this.id +", name=" + this._name + ", number=" + this._number + 
                ", address=" + this._address + ", city=" + this.city + 
                ", zip=" + this._zip + ", states=" + this._state;
    }
}