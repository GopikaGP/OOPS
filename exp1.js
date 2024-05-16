// [id]

class Employee{
    //  property
    empName
    empDesignation
    empLocation
    empSalary
    // construtor
    constructor(ename,edes,eloc,esal){
      this.empName =ename
      this.empDesignation= edes
      this.empLocation = eloc
      this.empSalary = esal
    }
    // methods
    display(){
        console.log(`employee name ${this.empName}`);
    }
}
// object

const obj = new Employee('neel','developer','kochi',30000)
obj.display()

// students 
class Students{
   

    // construtor
    constructor(stuId,stuName,stuAdd,stuDep){
        this.studentId = stuId
        this.studentName = stuName
        this.studentAddress = stuAdd
        this.studentDepartment = stuDep
        this.Dis()

    }
    // methos

    Dis(){
        console.log(`${this.studentName} is in the deparment of  ${this.studentDepartment}`);
    }

}
// obj

const objt = new Students(10,'joe','kollam','Computer Science')

const objt1 = new Students(11,'john','Trivandrom','Physics')

const objt2 = new Students(12,'Emmanuel','Ernalulam','Bio science')

