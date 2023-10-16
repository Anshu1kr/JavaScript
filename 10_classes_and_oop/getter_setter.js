class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}anshu`
    }

    set password(value){
        this._password = value
    }
}

const anshu = new User("anshu@google.com", "abc")
console.log(anshu.email);
console.log(anshu.password);