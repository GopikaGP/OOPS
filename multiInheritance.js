class A{
    methoda(){
        console.log(`inside methods function`);
    }
}
class B{
    methodb(){
        console.log(`inside method function`);
    }
}
class C{
    methodc(){
        console.log(`inside method c function`);
    }
}

// object
const obj = new C()
obj.methodc()
obj.methodb()
obj.methoda()
