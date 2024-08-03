const product2 = {
    name: 'shirts',
    'delivery-time': '1 day',
    rating:{
        stars:4.5,
        count: 87,
    },
    fun: function sun1(){
        console.log("function inside an objest")
    }
}
console.log(product2.rating.count);
product2.fun();

// JSON and LOCALSTORAGE
console.log(typeof JSON.stringify(product2))
const jsonString =  JSON.stringify(product2)

console.log(JSON.parse(jsonString));


const obj1={
    message: 'hello',
}
// const message = obj1.message;
// object destructuring
const {message} = obj1;
console.log(message);


