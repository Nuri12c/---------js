
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

  let list = {
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
})
/* привет */