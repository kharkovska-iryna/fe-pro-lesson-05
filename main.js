// 1. Написать функцию, которая превращает двумерный массив в один. 


let arr = [

    [1, 2, 3],
    
    [4, 5, 6],
    
    [7, 8, 9],

    [10, 11, 12]
    
    ];

let flattenArr = (a, b) => arr.reduce((a, b) => a.concat(b));  

console.log(flattenArr());  



// 2. Написать функцию, которая запрашивает у пользователя строку и проверяет, является ли она палиндромом. Функция должна возвращать true или false.

let word = prompt('Enter word', 'Например: "Анна"').trim();

function findPalindrome(str) {
    if (str === word.split('').reverse().join('')){
        return true
    } else {
        return false
    }
}
console.log(findPalindrome(word));




// 3. Напишите функцию для добавления неограниченного числа. Функция возвращает сумму всех чисел, переданных в качестве аргументов.

function addNumber() {
    let result = 0;
    for (arg of arguments) {
      result += arg;
    }
    return result;
  }
console.log(addNumber(2,4,5,2,5));


document.write(`
    <ul>
        <li> ${flattenArr()} </li>
        <li> ${findPalindrome(word)} </li>
        <li> ${addNumber(2,4,5,2,5)} </li>
    </ul>
`);