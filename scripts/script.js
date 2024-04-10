
window.addEventListener('DOMContentLoaded', function(){
  /* let object
  object = 'hidden'
  if ( object == 'hidden') {
    object = 'visible'
  } else {
    object = 'hidden'
  }
  console.log (object)


  let a
  a = -1
  if (a == 0) {
    a = 1
  } else if ( a < 0) {
    a = 'less then zero'
  } else {
    a *= 10
  }
  console.log(a) */
/* 
  let car = { 
    name: 'Lexus',
    age: 5,
    create: 2008,
    needRepair: false 
  }
  if (car.age > 5) {
    console.log('Need Repair')
    car.needRepair = true
  } else {
    car.needRepair = false
  }
  console.log (car)
  */
  /* let item = { 
    name: 'Intel core i7', 
    price: '100$', 
    discount: '15%' 
  }
  if (item.discount && item.discount !='') {
    item.priceWithDiscount =
        parseInt(item.price) -
        (parseInt(item.price) * parseInt(item.discount)) / 100;
  } else {
    console.log(item.price);
}
  console.log (item) */

  /* let product = { 
    name: 'Яблоко', 
    price: '22$' 
  };
  let min = 10;
  let max = 20;

  if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log (product.name)
  } else {
    console.log ('not found')
  } */


  /* let a = 'block'

  switch(a) {
    case 'block':
      console.log('block')
      break;
    case 'none':
      console.log('none')
      break;
    case 'inline':
      console.log('inline')
      break;  
    default :
      console.log('default')
  } */
  /* let h = 2
  h = (h == 0) ? 1 : h = (h < 0) ? 'less then zero' : (h *= 10);
  console.log(h) */
  /* const str = 'i am in the easycode'
  let str2 = str[0].toUpperCase()
  

  for (let i = 1; i <= str.length - 1; i++) {
    if (str[i-1] == ' ') {
      str2 = str2 + str[i].toUpperCase()
    } else {
      str2 += str[i]
    }
    
  }
  console.log(str2); */

 /*  const str = 'JavaScript is a pretty good language'
  let str2 = str[0].toUpperCase()
  for (let i = 1; i <= str.length - 1; i++) {
    if (str[i-1] == ' ') {
      str2 += str[i].toUpperCase()

    } else if (str[i] == ' ') {
      str2 += ''
    }
    else {
      str2 +=str[i]
    }
    
  }
  console.log(str2)

  let j = 'tseb eht ma i'
  let j2 = ''
  for (let i = j.length - 1; i >= 0; i--) {
    j2 += j[i]
  }
  console.log(j2)
  console.log(j.length)


  let n = 1
  for (i = 1; i <= 10; i++) {
    n*= i
    
  }
  console.log(n)
 */
 /*  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  for (let value of arr) {
    if (value % 2 === 0) {
      console.log(value)
    }
  } */

 /*  let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
  }
  for (let val in list) {
    if (typeof list[val] === 'string') {
      list[val] = list[val].toUpperCase()
    } 
  }
  console.log(list)

  const aa=2;
 */

/* 
function ott() {
  let arguments = [1,12,10]
  let sum = 1;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    console.log(sum);
} else console.log(0);
}

ott()

 
function string(text) {

  let value = ''
  for (i = text.length - 1; i >= 0 ; i--) {
    value += text[i]
  }
  console.log(value)
}
string('привет')



function reversString(str) {
  let arr = str.split("");
  console.log(arr.reverse().join(""));
}
 */





/* function multiply(name) {
  let result = ''
  for (let i in name) {
    result += name.codePointAt(i) + ' '
  }
  console.log(result)
}
multiply('Привет Амина') */

/* function game (FirstNumber) {
  
  if (FirstNumber > 0 && FirstNumber <= 10) {
    let SecondNumber = Math.floor(Math.random() * 10 + 1)
    if (FirstNumber == SecondNumber) {
      console.log('Урра! Вы победили')
    } else {
      console.log(`Простите, но вы проиграли... Выйгрышное число ${SecondNumber}`)
    }
  } else {
    console.log('Введите число от 1 до 10')
  }
} */

/* game('5') */

/* function multiply (arr) {
  
  let a = 1
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      a *= arr[i]
      
    } 
    console.log(a)
    } else {
      console.log (0)
  }
}
multiply([2,3,4,5]) */

/* function reverseString(value) {
  let a = ''
  for (let i = value.length -1; i >= 0; i--) {
    a += value[i]
  }
  console.log(a)
}
reverseString('Привет')
let s = 'привет'
console.log(s.length)
console.log(s[5]) */


/* function getCodeStringFromText(text) {
  let a = ""
  for (let i in text) {
    a += text.codePointAt(i) + ' '
  }
  console.log(a)
}

getCodeStringFromText ('привет малышка') */

/* function getArray (n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i + 1)
  }
  console.log (arr)
}
getArray(8) */


/* function arr (doubleArr) {
  for (let i in doubleArr) {
    doubleArr.push(doubleArr[i])
  }
  console.log(doubleArr)
}
arr ([1,12,3,5]) */
/*   */
/* function funcGetUsers (name, age, gender) {

  
    if ((typeof name === 'string' && name.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) && (age > 0 && age < 100) && (gender == 'male' || gender == 'female')) {
      console.log(arguments)
    } else console.log('заполните поля')

  
}
funcGetUsers('ВЛАД',23,'male') */


/* const names = ['nuri', 'amina', 'lllove']
const blabla = ['nu221ri', 'am1231231231ina', 'lllove']
function mapArray (arr, fn) {
  const res = []
  for (let i = 0; i< arr.length; i++) {
    res.push(fn(arr[i]))
  }
  return res
}
function nameLength(ttt) {
  console.log(ttt)
  return ttt
}
mapArray(names, nameLength) */

/* function processString(string, handler) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
      newString += handler(string[i]);
  }

  return newString;
  
}

function name (symbol) {
  
  return symbol.toUpperCase();
  
};

let gg = processString('Hello, easycode!', name); 
console.log (gg)

  
 */
  /* let arr = ['my', 'name', 'is', 'Trinity'] 
  let arr2 = [10, 20, 30]
  let arr3 = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}]
  let arr4 = ['abc', '123','1234']
 function basic (arr, fn) {
  let str = 'New value:'
  for (let i = 0; i < arr.length;i++) {
  str +=  fn(arr[i])
 

  }
  return str
  
 }
 function first (el) {
  return el
 }
 function second (el) {
  return el * 10 + ','
 }
 function third (el) {
  return `${el.name} is ${el.age} `
 }
 function four (el) {

  return el.split(''). reverse (). join ('') + ' '
  
 }
let a = basic(arr4, four)
console.log (a)
 */

/* 
let arr = [12,13,9,15]
function every (arr, fn) {
let value = ''
for (i = 0 ; i < arr.length; i++) {
  value =  value + fn(arr[i])
}
return value
}

function rrr (el) {
  return `${i+1}:${el>5} `
}

const qqq = every(arr, rrr)
console.log(qqq) */
/* const price = {
  price: 600,
  discount: '15%',
  getPriceWithDiscount: function() {
    return this.price / 100 * parseFloat(this.discount)
  }
};
console.log(price.getPriceWithDiscount()) */

/* const object = {
  height: 10,
  inc: function() {
    return this.height
  }
}
 */
/* const numerator = {
  number: 4,
  PlusOne: function() {
    this.number++
   return this
  },
  MinusOne: function() {
   this.number--
   return this
  },
  Doubler: function() {
    this.number *= 2
    return this
   }
}

numerator.Doubler().PlusOne().PlusOne().MinusOne();
console.log(numerator) */
/* function totalPrice() {
    let sum = this.price * this.lot
    console.log(sum)
    return this
  }

const shop = {
  price: 20,
  lot: 112,
  totalPrice
}

shop.totalPrice()

const mashineShop = {
  price: 400,
  lot: 12,
  totalPrice,
}
mashineShop.totalPrice()
 */
/* function getSquare (hola) {return this.width * this.height + hola};
let sizes = {width: 5, height: 10};
const a = getSquare.call(sizes, 10)
console.log(a )
 */
/* let element = {
  height: 25,
  getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(element.getHeight);

 */



/* function sum() {
  const params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce(function (prev, next) { return prev + next; });
}
console.log(sum(1,2,3))
sum(1, 2, 3, 4); // 10
sum(); // 0


const ARRAY = (arrayArgu) => {
  if (!arrayArgu.length) return 0
  return arrayArgu.reduce((one, two) => one + two)
}
console.log(ARRAY(1,2,3)) */

/* const sum = (allArguments) => {
  const params = Array.prototype.slice.call(allArguments);
  if (!params.length) return 0;

  return params.reduce((prev, next) => prev + next);
}

console.log(sum(1,2,3,4,5)); */

/* const date = (b) => {
  switch(b) {
    case 1 : console.log('Понедельник')
    break
    case 2 : console.log('Вторник')
    break
    case 3 : console.log('Среда')
    break
    case 4 : console.log('Четверг')
    break
    case 5 : console.log('Пятница')
    break
    case 6 : console.log('Суббота')
    break
    case 7 : console.log('Воскресение')
    break
    default: console.log('ВВедите число от 1 до 7')
  }
}
date(2) */
})

/* привет */