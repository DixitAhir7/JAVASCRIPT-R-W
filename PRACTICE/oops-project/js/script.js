class Bank {
    constructor(accountName) {
        this.accountName = accountName
        this.balance = 0
        this.transaction = []
    }
    createAcc() {
        return String(this.accountName)
    }

    deposit(amount) {
        this.balance += amount
        console.log(`balance deposited: ${this.balance}`)
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log('must be > 0')
        }

        if (this.balance < amount) {
            return `you dobn't have this much money in account`
        }
        this.balance -= amount
        return `you have withdrawed ${amount} total amount ${this.balance}`
    }

    transfer(amount, transferAcc) {
        this.balance -= amount
        transferAcc.balance += amount
        return `Transferred ${amount} to ${transferAcc.accountName}. Your new balance: ${this.balance}`;
    }
}

const acc = new Bank('dixitahir7');
const acc2 = new Bank('dixitahir8');
console.log(acc.createAcc());
acc.deposit(500);
acc2.deposit(500);
console.log(acc.withdraw(100));


// transfer information

console.log(acc.balance) //400
console.log(acc2.balance) //500 default

acc2.transfer(500, acc) //500 + 400;

console.log(acc.balance)
console.log(acc2.balance)