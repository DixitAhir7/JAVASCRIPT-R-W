class Students {
    constructor(id, name, rollno) {
        this.id = id
        this.name = name
        this.rollNO = rollno
    }

    // adding fees to student class
    add(fees, message) {
        this.fees = `${fees} ${message}`
    }
}

const student1 = new Students(1, 'dixit', 96);
student1.add(10000, 'fee is pending')
console.log(student1);