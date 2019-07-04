// PART 1
// var age = prompt('Enter your age!');
// var message = (+age >= 18) ? console.log('You are welcome!') :
//     (age < 12) ? console.log('Use another service') :
//         (age < 18) ? console.log('Access is denied') :
//             (typeof (age)) ? console.log('insert the number') :
//                 '';


// PART 2
// var age = prompt('Enter your age!');
// var experience = prompt('Enter your experience');

// if (age >= 30 && experience >= 3){
//     console.log('You are accepted');
// }else{
//     console.log('You do not suit us');
// }

// PART 3
var currencyObject = new Object();
var currencies = []
currencies[0] = { "name": "Euro", "price": "30.5" };
currencies[1] = { "name": "Dollar", "price": "26.4" };
currencyObject.currencies = currencies;
var a = currencyObject.currencies;
// console.log(a);


var hrivnaValue = prompt('Insert hrivna value');
var currency = prompt('Insert Euro or Dollar');

function counting(a, hrivnaValue, currency) {
   for (value in a) {
      if (currency == a[value]["name"]) {
         return (hrivnaValue / a[value]["price"]).toFixed(2);
      }
   }
}
console.log(counting(a, hrivnaValue, currency));
