// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}

// Methods added to the BankAccount prototype
BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdraw = function(amount) {
    if (this.active && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: $${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};

// Create multiple BankAccount objects
const account1 = new BankAccount(101, "John Doe", "Savings", 1000);
const account2 = new BankAccount(102, "Jane Doe", "Checking", 5000);

// Test deposit, withdrawal, and balance check operations
account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.withdraw(600);
account2.checkBalance();

// Test isActive method
console.log(`${account1.name}'s account is active: ${account1.isActive()}`);
console.log(`${account2.name}'s account is active: ${account2.isActive()}`);

// Function to calculate total balance of all active accounts
function getTotalBalance() {
    const activeAccounts = [account1, account2].filter(account => account.isActive());
    const totalBalance = activeAccounts.reduce((total, account) => total + account.balance, 0);
    return totalBalance;
}

// Test getTotalBalance function
const totalBalance = getTotalBalance();
console.log(`Total balance of all active accounts: $${totalBalance}`);
