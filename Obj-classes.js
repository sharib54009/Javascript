let DATA = "data";
class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data =", DATA);
    }
}

class admin extends user {

constructor(name, email) {
    super(name, email);
}
    editData() {
        DATA = "edited data";
    }
}

let student1 = new user("Sharib", "abc@gmail.com");
let student2 = new user("mohammed", "def@gmail.com");
let Teacher = new user("dean", "dean@gmail.com");

let admin1 = new admin("admin", "admin@gmail.com");
