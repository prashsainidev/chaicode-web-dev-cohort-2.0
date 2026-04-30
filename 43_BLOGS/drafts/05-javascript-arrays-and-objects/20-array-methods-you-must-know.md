## Introduction

Arrays sirf values store karne ke liye useful nahi hoti.

Real power tab aati hai jab hum un arrays ke saath kaam karna start karte hain.

For example:

- new item add karna
- last item remove karna
- har element ko update karna
- kuch specific values nikalna
- total sum calculate karna

Yahi kaam array methods ke through easy ho jaata hai.

Simple words mein:

**array methods built-in functions hoti hain jo array par common operations perform karne mein help karti hain**

Har method ka apna role hota hai.

- kuch methods original array ko change karti hain
- kuch methods new array return karti hain
- aur kuch methods sirf har item par kaam karne ke liye use hoti hain

* * *

## `push()` and `pop()`

Ye dono methods array ke **end** ke saath kaam karti hain.

Jab humein last mein new value add karni ho, tab `push()` useful hota hai.
Jab humein last value remove karni ho, tab `pop()` useful hota hai.

### `push()`

```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);
```

Yahan `"Mango"` array ke end mein add ho gaya.

### `pop()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
console.log(fruits);
```

Yahan last item remove ho gaya.

* * *

## `shift()` and `unshift()`

Ye methods bhi add/remove ka kaam karti hain, but difference ye hai ki ye array ke **start** se kaam karti hain.

### `shift()`

```javascript
let fruits = ["Apple", "Banana", "Mango"];
fruits.shift();
console.log(fruits);
```

`shift()` first element ko remove karta hai.

### `unshift()`

```javascript
let fruits = ["Banana", "Mango"];
fruits.unshift("Apple");
console.log(fruits);
```

`unshift()` first position par new value add karta hai.

* * *

## `forEach()`

`forEach()` tab useful hota hai jab humein array ke har element ke saath koi action perform karna ho.

Ye mostly tab use hota hai jab humein:

- print karna ho
- value inspect karni ho
- simple side effect run karna ho

```javascript
let numbers = [2, 4, 6];

numbers.forEach((num) => {
  console.log(num);
});
```

Traditional loop ke comparison mein ye cleaner lag sakta hai for simple iteration.

Important point:

`forEach()` new array return nahi karta. Ye sirf har element par kaam chalata hai.

* * *

## `map()`

`map()` tab use hota hai jab humein existing array ke har element ko transform karke ek **new array** banana ho.

Yani original data same reh sakta hai, aur transformed result alag mil jaata hai.

```javascript
let numbers = [2, 4, 6];

let doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled);
```

`map()` har element ko transform karta hai aur new array return karta hai.

Yahan:

- `2` becomes `4`
- `4` becomes `8`
- `6` becomes `12`

* * *

## `filter()`

`filter()` tab useful hota hai jab humein array mein se sirf kuch selected values rakhni ho.

Ye har element par condition check karta hai.
Jo value condition pass karti hai, woh new array mein chali jaati hai.

```javascript
let numbers = [5, 12, 18, 7];

let greaterThan10 = numbers.filter((num) => {
  return num > 10;
});

console.log(greaterThan10);
```

`filter()` sirf matching values ko new array mein rakhta hai.

Is example mein sirf `12` aur `18` condition pass karte hain.

* * *

## `reduce()` - Basic Explanation

`reduce()` beginner ko pehle thoda tricky lag sakta hai, but idea simple hai.

Ye array ki multiple values ko step by step process karke ek final result banata hai.

Ye final result ho sakta hai:

- total sum
- product
- count
- ek single combined value

```javascript
let numbers = [10, 20, 30];

let total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total);
```

`reduce()` many values ko ek final result mein combine karta hai.

Is example mein:

- pehle `0 + 10`
- phir result `+ 20`
- phir result `+ 30`

Final answer `60` aata hai.

* * *

## A Small Practice Assignment

Is small practice ka goal ye hai ki tum teen different methods ka role ek saath compare kar sako:

- `map()` transformation ke liye
- `filter()` selection ke liye
- `reduce()` final calculation ke liye

```javascript
let numbers = [5, 10, 15, 20];

let doubled = numbers.map((num) => num * 2);
console.log(doubled);

let greaterThan10 = numbers.filter((num) => num > 10);
console.log(greaterThan10);

let total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);
```

Expected understanding:

- `doubled` mein har value double ho jaayegi
- `greaterThan10` mein sirf `10` se badi values rahengi
- `total` mein sab numbers ka sum aayega

* * *

## Summary

- `push()` array ke end mein value add karta hai
- `pop()` end se value remove karta hai
- `shift()` start se remove karta hai
- `unshift()` start mein add karta hai
- `forEach()` har element par action perform karta hai
- `map()` transformed new array banata hai
- `filter()` matching values ki new array banata hai
- `reduce()` many values ko one final result mein combine karta hai

* * *

## Final Thought

Array methods JavaScript ko zyada expressive aur readable banati hain.

Ek baar inka basic use samajh aa gaya, toh arrays ke saath kaam karna kaafi smoother lagne lagta hai.

* * *

## Continue Reading

- Previous: [JavaScript Arrays 101](https://prashsainidev.hashnode.dev/javascript-arrays-101)
- Next: [Understanding Objects in JavaScript](https://prashsainidev.hashnode.dev/understanding-objects)
