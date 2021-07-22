// function work(a,b,c,d) {
//     var add1 = a+b;
//     var add2 = c+d;
//     var divide = add1 / add2
//     return add2;
// }

// var result = work(1,2,3,4)

// console.log(result)



// var wahala = work(4,6,7,8,9)

// console.log(wahala)



// function result(a,b) {
//     var add = a+b;

//     add > 50 ? console.log("this person pass") : console.log("this person failed")
//     return add;

// }
//     result(50,50)





// math(45, 12, "+")
// math(45, 12, "-")
// math(45, 12, "*")
// math(45, 12, "/")





math(45, 12, "add")
math(45, 12, "sub")
math(45, 12, "div")
math(45, 12, "mul")
math(45, 12, "per")
math(45, 12, "mod")

function math(num1, num2, math) {
    var add = num1+num2
    var sub = num1-num2
    var div = num1*num2
    var mul = num1/num2
    var per = num1*num2/100
    var mod = num1 % num2


    return (math == 'add') ? "add" 
    : (math == 'sub') ? ""
    : math == mul ? "mul" :''
    
    
    // if (math == 'add') {
    //     result = add;

    // }

    // else if (math == 'sub') {
    //     result = sub;

    // }
    
    

    // else if (math == 'div') { 
    //     result = div;

    // }
       
    

    // else if (math == 'mul') {
    //     result = mul;
    // }

    // else if (math == 'mod') {
    //     result = mod;
    // }

    // else {
    //     result = per;
    // }
     
    
    console.log(result)

    return result;


    
}
console.log(math(45,12, "sub"))






// if (working > 50) {
//     console.log('this person pass')
// }
// else {
//     console.log('this person failed')
// }