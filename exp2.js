// w a p methods for solving the given questions

class Bank{
    //property
    accountDetails={
      1000:{acno:1000,usename:'user1',password:'user1',balance:50000},
      1001:{acno:1001,usename:'user2',password:'user2',balance:40000},
      1002:{acno:1002,usename:'user3',password:'user3',balance:100000},
      1003:{acno:1003,usename:'user4',password:'user4',balance:35000},
    }

    // validate a given account number
    // authenticate the acccount
    // check the balance
    // fund treanfer

    // methods

   validate(acno){
    // 1
    return acno  in  this.accountDetails?'Account is valid':'Account inValid'
   }
// authenticate the acccount

authenticate(acno, password) {
  if (this.accountDetails[acno] && this.accountDetails[acno].password === password) {
      console.log('User authenticated');
  } else {
      console.log('Not authenticated');
  }
}
// check the balance
balance(acno){
  if(this.accountDetails[acno]&&this.balance){
    console.log(`the balnce is ${this.accountDetails[acno].balance}`)
  }else{
    console.log('wrong accont number' );
  }
}


// fun transfer
fundTransfer(fromAcno,ToAcno,fpswd,amount){
  if(this.validate(fromAcno) && this.validate(ToAcno))
   if(this.accountDetails[fromAcno].password==fpswd){
    console.log(`current balance of ${fromAcno} is ${this.accountDetails[from]}`);
   }
}

}

    
    


const obj = new Bank()
  console.log(obj.validate(1000))

const obj1 = new Bank()
obj1.authenticate(1002,'user3')

const obj2 = new Bank()
obj2.balance(1000)


