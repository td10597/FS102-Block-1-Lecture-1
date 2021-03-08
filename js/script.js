// let x = 5;
// let y = 7;
// let r = x % y;

// let num1 = 10;

// let age = 23;
// let prof = "game dev";

// console.log('I will be', age, 'years old in 2025, being a', prof);
// //alert('I will be ' + age + ' years old in 2025, being a ' + prof);

// let quote = "this is a quote: \"updoot\"";
// console.log(quote);

// let user = "abcd";
// let pass = "1235";
//let passConfirmedKey = "";

// let userDB = "abcd";
// let passDB = "1234";

// if((user != userDB) || (pass == passDB))
// {
//     alert("User name is wrong or password is the same as old password. Try again.");
// }
// else
// {
//     passDB = pass;
//     alert("Password changed successfully! the new password is " + passDB);
// }


// let checkNum = prompt("Enter your number: ");

// if(checkNum != null)
// {
//     if((checkNum % 2) == 0)
//     {
//         let result = checkNum + " is divisible by 2.";
//         console.log(result);
//     }
//     if((checkNum % 3) == 0)
//     {
//         let result = checkNum + " is divisible by 3.";
//         console.log(result);
//     }
//     if((checkNum % 5) == 0)
//     {
//         let result = checkNum + " is divisible by 5.";
//         console.log(result);
//     }
// }

// let greeting = prompt("Enter your greetings: ");

// switch(greeting)
// {
//     case "Hi":
//         console.log("Hello!");
//         break;
//     case "Back":
//         console.log("Welcome back!");
//         break;
// }

// for( let i = 9; i >= 0; i--)
// {
//     console.log(i);
// }

// let i = 0;

// while(i <= 20)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i);
//     }
//     i++;
// }

// let i = 1;
// do
// {
//     console.log(i);
//     i++;
// }
// while (i <= 20)

// let text = "";
// let yourname = prompt("Enter your name: ");
// let birth = prompt("Enter your birth year: ");
// let year = prompt("Enter the year you want to know your age: ");
// function ageCalculation(yourname, birth, year)
// {
//     if(yourname != null && birth != null && year != null)
//     {
//         let age = year - birth;
//         text = `Hi, ${yourname}! You will be ${age} in ${year}.`;
//     }
//     else
//     {
//         text = `Please enter all the approriate infos.`
//     }
//     return text;
// }
// ageCalculation(yourname, birth, year);
// alert(text);

// let num1 = parseFloat(prompt("Enter number 1: "));
// let num2 = parseFloat(prompt("Enter number 2: ")); 
// let operator = prompt("Enter the operator: ")
// let result = 0;

// let sum = 0;
// function sumOfTwo(num1, num2)
// {
//     sum = num1 + num2; //didn't work because + merging two strings.
//     return sum;
// }
// sumOfTwo(num1, num2);
// alert(sum);

// function calculator(num1, num2, operator)
// {
//     if(operator == "+")
//     {
//         result = num1 + num2;
//     }
//     else if(operator == "-")
//     {
//         result = num1 - num2;
//     }
//     else if(operator == "*")
//     {
//         result = num1 * num2;
//     }
//     else if(operator == "/")
//     {
//         result = num1 / num2;        
//     }
//     else
//     {
//         alert("There are errors with your inputs.")
//     }
//     return result;
// }
// calculator(num1, num2, operator);
// alert(result);

let text = "";
function rdnGenerator(min, max)
{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function diceRoll()
{
    let n = parseInt(prompt(`How many dices do you want to roll: `));
    let r;
    let s = 0;
    if(n > 0 && n != null)
    {
        text = "";
        for(let i = 0; i < n; i++)
        {
            r = rdnGenerator(1, 6);
            s += r;
            text += `the roll number ${i+1} is ${r}.`;
        }
        $(`#p3`).text(text);
        $(`#p2`).text(`The sums of ${n} rolls is ${s}.`);
    }
    else
    {
        $(`#p2`).text(`Please enter how many dice to roll and try again.`);
    }
}

// let user =
// {
//     firstName: `John`,
//     lastName: `Doe`,
//     age: 28,
//     sex: `M`,
//     email: `johndoe@gmail.com`,
//     fullName: function () 
//     {
//         return this.firstName + ` ` + this.lastName;
//     }
// }

function ChangeColor()
{
    let col = document.getElementById(`p1`).style.color;
    if (col != `red` && col != `blue` && col != `yellow`)
    {
        $(`#p1`).css(`color`, `red`);
    }
    else if (col == `red`)
    {
        $(`#p1`).css(`color`, `blue`);
    }
    else if (col == `blue`)
    {
        $(`#p1`).css(`color`, `yellow`);
    }
    else
    {
        $(`#p1`).css(`color`, `red`);
    }
}

$(document).ready(function()
{
    $(`#btn`).on(`click`, function()
    {
        let col = $(`#p1`).css(`color`);
        if(col != `rgb(255, 0, 0)` && col != `rgb(255, 255, 0)` && col != `rgb(0, 255, 0)`)
        {
            $(`#p1`).css(`color`, `rgb(255, 0, 0)`);
            $(`#p1`).text(`Stop!`);
        }
        else if (col == `rgb(255, 0, 0)`)
        {
            $(`#p1`).css(`color`, `rgb(255, 255, 0)`);
            $(`#p1`).text(`Slow Down!`);
            console.log(col);
        }
        else if (col == `rgb(255, 255, 0)`)
        {
            $(`#p1`).css(`color`, `rgb(0, 255, 0)`);
            $(`#p1`).text(`Full Speed Ahead!`);
            console.log(col);
        }
        else
        {
            $(`#p1`).css(`color`, `rgb(255, 0, 0)`);
            $(`#p1`).text(`Stop!`);
        }
    })
})
// var para = document.createElement(`p`);
// var node = document.createTextNode(`This is a new paragraph.`);
// para.appendChild(node);

// var element = $(`#div1`);
// var child = $(`#text2`);
// // element.insertBefore(para, child);
// element.replaceChild(para, child);


// var elrem = document.getElementById(`text1`);
// elrem.remove();

var element = $(`#div1`);
var para = $(`<p>This is a new paragraph.</p>`);
para.appendTo(element);
