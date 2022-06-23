//Array methods
//toString
const arr=[23,56,45,78,44,223,89,73];
const narr= arr.toString();
console.log(narr);

arr.pop(); 
console.log(arr);

arr.push(16);
console.log(arr);

const a1=["hi", "hello", "world"]
const a2=["I", "am", "good"]
const a3= a1.concat(a2);
console.log(a3);

const veg = ["potato", "onion", "tomato", "ginger"];
veg.shift();
console.log(veg);

veg.unshift("lemon")
console.log(veg);

veg[veg.length]="cucumber";
console.log(veg);

const place=['delhi','mumbai','lucknow'];
place.splice(1,1,'bhpal','goa');
console.log(place);

const area=place.slice(1);
console.log(area);