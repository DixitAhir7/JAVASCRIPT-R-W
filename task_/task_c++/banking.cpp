#include <iostream>
#include <vector>
#include <memory>
using namespace std;

int main()
{

    vector<unique_ptr<Account>> accounts;

    accounts.push_back(
        make_unique<SavingsAccount>(5000, 4.5));

    accounts.push_back(
        make_unique<CheckingAccount>(10000));

    accounts.push_back(
        make_unique<FixedDepositAccount>(20000, 7.5));

    int choice;
    int accountChoice;
    double amount;

    do
    {
        cout << "select account:\n";
        cout << "1. savings account\n";
        cout << "2. checking account\n";
        cout << "3. fixed deposit account\n";
        cout << "4. exit\n";
        cout << "enter choice: ";
        cin >> accountChoice;

        if (accountChoice == 4)
        {
            cout << "exited.\n";
            break;
        }

        if (accountChoice < 1 || accountChoice > 3)
        {
            cout << "select by 1 or 3 only.\n";
            continue;
        }

        Account *account = accounts[accountChoice - 1].get();

        do
        {
            cout << "\nAccount: ";
            account->displayAccountType();

            cout << "\nCurrent Balance: "
                 << account->getBalance() << endl;

            cout << "\n1. Deposit\n";
            cout << "2. Withdraw\n";
            cout << "3. Calculate Interest\n";
            cout << "4. Back to Account Selection\n";

            cout << "Enter choice: ";
            cin >> choice;

            switch (choice)
            {

            case 1:
                cout << "Enter deposit amount: ";
                cin >> amount;
                account->deposit(amount);
                break;

            case 2:
                cout << "Enter withdrawal amount: ";
                cin >> amount;
                account->withdraw(amount);
                break;

            case 3:
                cout << "Interest: "
                     << account->calculateInterest()
                     << endl;
                break;

            case 4:
                cout << "Returning to account selection...\n";
                break;

            default:
                cout << "Invalid choice.\n";
            }

        } while (choice != 4);
    } while (true);

    return 0;
}

class Account
{
private:
    double balance;

public:
    Account(double initialBalance)
    {
        balance = initialBalance;
    }

    virtual ~Account() {}
    double getBalance() const
    {
        return balance;
    }
    void setBalance(double newBalance)
    {
        balance = newBalance;
    }

    virtual void deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
            cout << "deposit successful.\n";
        }
        else
        {
            cout << "amount must be > 0.\n";
        }
    }

    virtual void withdraw(double amount)
    {
        if (amount > 0 && amount <= balance)
        {
            balance -= amount;
            cout << "withdrawal successful.\n";
        }
        else
        {
            cout << "amount must be > 0.\n";
        }
    }

    virtual double calculateInterest() const = 0;

    virtual void displayAccountType() const = 0;
};

class SavingsAccount : public Account
{
private:
    double interestRate;

public:
    SavingsAccount(double balance, double rate)
        : Account(balance), interestRate(rate) {}

    double calculateInterest() const override
    {
        return getBalance() * interestRate / 100;
    }

    void displayAccountType() const override
    {
        cout << "Savings Account";
    }
};

class CheckingAccount : public Account
{
public:
    CheckingAccount(double balance)
        : Account(balance) {}

    double calculateInterest() const override
    {
        return 0;
    }

    void displayAccountType() const override
    {
        cout << "checking account";
    }
};

class FixedDepositAccount : public Account
{
private:
    double interestRate;

public:
    FixedDepositAccount(double balance, double rate)
        : Account(balance), interestRate(rate) {}

    double calculateInterest() const override
    {
        return getBalance() * interestRate / 100;
    }

    void withdraw(double amount) override
    {
        cout << "Withdrawal is not allowed before maturity.\n";
    }

    void displayAccountType() const override
    {
        cout << "Fixed Deposit Account";
    }
};