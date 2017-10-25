var person={
  name:"mikel",
  age:27,
  address:"texas",
  location:{
    city:"houston",
    temp:92
  }
};

var {name,age}=person;
console.log(`name is ${name} and age is ${age}`);

var {city:place, temp}=person.address;
if(place && temp){
console.log(`city is ${place} and temp gonna be--${temp}`);
};


const somewhere=["1234 cali st","philadelphia","pennsylvania","192451"];
const [placee,state,cityy,num]=address;
console.log(placee,state,cityy,num);
