class Students {

    #id;
    static count = 0;

    constructor(name, rollno) {
        this.name = name
        this.rollNO = rollno
        this.constructor.count++;
        this.#id = this.constructor.count;
    }

    // adding fees to student class
    add(fees, message) {
        this.fees = `${fees} ${message}`
    }

    getId(){
        return this.#id
    }
};

const student1 = new Students('dixit', 96);
const student2 = new Students('devang', 55);
const student3 = new Students('akash', 5);
const student4 = new Students('pratham', 18);


student1.add(10000, 'fee is pending');
student2.add(10000, 'fee is pending');
student3.add(10000, 'fee is pending');
student4.add(10000, 'fee is pending');

// adding id to student objects 
student1.getId()
student2.getId()
student3.getId()
student4.getId()


console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);