class User {

    #id;
    static countId = 0;

    constructor(name, age, contact) {
        this.name = name
        this.age = age
        this.contact = contact
        User.countId++
        this.#id = User.countId
    };

    getId() {
        return this.#id
    }
};

class Student extends User {
    constructor(id, name, age, contact, subjects = []) {
        super(name, age, contact);
        this.id = id
        this.subjects = subjects
    };
};

class Teacher extends User {
    constructor(id, name, age, contact, subjects = []) {
        super(name, age, contact);
        this.id = id
        this.subjects = subjects
    };
};

const s1 = new Student('dixit', 21, 8866555078, 'javascript');
s1.getId();
console.log(s1);