function createBankAccount(){
    let balance = 0;
    let transactions = [];

    return {
        deposit(amount){
            if(amount <=0){
                return "Deposite amount must be positive";
            }
            balance += amount;
            transactions.push({type:"desposit", amount});
            return balance;
        },

        withdraw(amount){
            if(amount <=0){
                return "Withdrawal amount must be positive";
            }
            if(amount > balance){
                return "Insuficient balance";
            }
            balance -= amount;
            transactions.push({type:"withdraw", amount})
            return balance;
        },
        getBalance(){
            return balance;
        },
        getTransactionHistory(){
            return [...transactions];
        }
    }
}

// let data = createBankAccount()

// console.log(data.deposit(300));
// console.log(data.withdraw(20));
// console.log(data.getBalance());
// console.log(data.getTransactionHistory());