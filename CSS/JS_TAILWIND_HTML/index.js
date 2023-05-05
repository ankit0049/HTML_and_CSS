// const number = document.querySelector('.show');
// function increment()
// {
//     let value = Number(number.innerText);
//     value=value+1;
//     number.innerText=value;
// }; 

// function decrement()
// {
//     let value = Number(number.innerText);
//     value=value-1;
//     number.innerText=value;
// }; 


const num1 = document.querySelector("#first");
const num2 = document.querySelector("#second");
const cal =  document.querySelector(".cal");
const res = document.querySelector(".result");

cal.addEventListener("click",function(){
 const sum = Number(num1.value) + Number(num2.value);
    res.innerText=`The sum of ${Number(num1.value)} and ${Number(num2.value)} is ${sum}.`;
});