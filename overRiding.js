class A{
    methoda(){
        console.log('this is first method');
    }
}
class B extends A{
    methoda(){
        console.log('this is second method');
    }
    methoda(){
        console.log('this is Third method');
    }
}
const obj = new B()
obj.methoda()