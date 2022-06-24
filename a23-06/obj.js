const obj={
    roll :01,
    name:'a',
    class:5,
    marks:78

};
console.log(Object.keys(obj));
console.log(Object.values(obj));

obj['grade']='a';
console.log(obj);

delete obj['grade'];
console.log(obj);

obj['name']='abc';
console.log(obj );