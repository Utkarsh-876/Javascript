/* // Function Defination
 function sayName()
 {
    console.log("Utkarsh Misal");
 }


 //Function used- Function call
 sayName();*/


 /* Function Using Loop
 -----------------------
 
function counting()
{
    for(let i=1;i<=100;i++)
    {
        console.log(i);
    }
}

counting();*/


/* Function using parameter
-------------------------------------


function printNum(num)
{
   console.log(num);
}

printNum(5);
*/



/* Function using Parameter Avg
---------------------------------

function getAverage(num1,num2)
{
     let avg=(num1+num2)/2;
     console.log(avg);
}


getAverage(3,70);
*/



/* Return Function
--------------------

function getSum(a,b,c)
{
   let sum=a+b+c;
   return sum;
}

//console.log(getSum(1,2,3));
let ans=getSum(2,5,4);
console.log("Printing sum is: ",ans);




function getName(fName,lName)
{
    let fullName=fName+" "+lName;
    return fullName;
}

let ans=getName("Utkarsh", "Misal");
console.log("My fullname is ",ans);

*/



/* Arrow Function
--------------------*/

let getExp=(x,y)=>{
    let ans=(x**y);
    return ans;
}

console.log(getExp(2,10));


