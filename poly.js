class A{
    methoda(){
         console.log(`invite first method`);
    }
    methoda(n){
        this.n1 =n
        console.log(`inside the methods with arguments ${this.n1}`);
    }

    methoda(n,m){
        console.log(`inside the methods with arguments ${n} and ${m}`);
    }

}
// object
const obj = new A()
obj.methoda()