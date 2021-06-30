var Emaage = 1994-2000
var JohnAge = 1992-2000
var kenAge = 1996-2000

console.log(Emaage)

//=========================================================

var micahDOB = 1990
var auduDOB = 1995
var sadiqDOB = 1982

var presentYear = 2000

var micahAge = presentYear - micahDOB
var auduAge = presentYear - auduDOB
var sadiqAge = presentYear - sadiqDOB

console.log('micah Age is '+micahAge)
console.log('audu Age is '+auduAge)
console.log('Sadiq Age is '+sadiqAge)

//=========================================================



console.log('//********************* USING FUNCTIONS *******************/')

var micahDOB = 1990
var auduDOB = 1995
var sadiqDOB = 1982

var name1 = "micah"
var name2 = "audu"
var name3 = "sadiq"

var occupation1 = "barber"
var occupation2 = "doctor"
var occupation3 = "engineer"


var currentYear = 2075

var micahAge = calculateAge(micahDOB, name1, occupation1, currentYear)
var auduAge = calculateAge(auduDOB, name2,  occupation2, currentYear)
var sadiqAge = calculateAge(sadiqDOB, name3,  occupation3, currentYear)


//********************************************************/

function calculateAge(dob, name, occupation, currentYear){

    //var presentYear = 2021

    

    var age = currentYear - dob

    //return age

    if(occupation=='engineer'){
        alert(name + ' is ' +age + ' years old and he is an ' +occupation)

    }else{
        alert(name + ' is ' +age + ' years old and he is a ' +occupation)

    }
   


}