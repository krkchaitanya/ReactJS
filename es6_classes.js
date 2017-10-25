class Person {
  constructor(name="anonymous",age=0) {
    this.name=name;
    this.age=age;
  }
  getGreetings(){
    return 'HiAll'+'i am '+this.name;
  }
  getDescription(){
    return `individuals age gonna be ${this.age}`;
  }
}
// const me=new Person("mikel Jack");
// console.log(me);

class Student extends Person{
constructor(name,age,major){
  super(name,age);
  this.major=major;
}
hasMajor(){
  return !!this.major;
}
getDescription(){
  let description=super.getDescription();

  if(this.hasMajor()){
    description+=`their major is ${this.major}`;
  }

return description;
}

}

const me=new Student("jackson",26,"computer engineering");
console.log(me);
const noMaj=new Student();
console.log(noMaj.hasMajor());
console.log(me.getDescription());

// const other=new Person("jack",23);
// console.log(other.getGreetings());
// console.log(other.getDescription());
