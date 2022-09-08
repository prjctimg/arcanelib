class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, age, phone, address) {
        /* Remove the extra fields because we will create methods to set them */
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }
    //Return this so that the methods are chainable
    setAge(age) {
        this.user.age = age
        return this
    }
}