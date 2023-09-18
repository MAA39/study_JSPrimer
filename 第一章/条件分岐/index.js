//whileow使った例題
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;
while (array[count] < 10) {
    console.log(array[count]);
    count++;
}
//for文を使った例題
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let count = 0; array1[count] < 10; count++) {
    console.log(array1[count]);
}
//for...of文を使った例題
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let value of array2) { // 配列の要素を変数valueに代入して繰り返す
    console.log(value); // 結果: 1, 2, 3, 4, 5, 6, 7, 8, 9
}
//for...in文を使った例題
const obj = { a: 1, b: 2, c: 3 };   
for (let key in obj) { // オブジェクトのプロパティ名を変数keyに代入して繰り返す
    console.log("key: " + key + ", value: " + obj[key]); // 結果: "a: 1", "b: 2", "c: 3"
}

//for...in文を使った例題
const obj1 = { a: 1, b: 2, c: 3 };
for (let key in obj1) {
    console.log("key: " + key + ", value: " + obj1[key]);
}

//foreach文を使った例題
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array3.forEach(value => {
    console.log(value); // 結果: 1, 2, 3, 4, 5, 6, 7, 8, 9  
}
);

// コールバック関数　に関しての解説動画で最高にわかりやすい動画を見つけたので、
// ここに貼っておく。

// https://youtube.com/playlist?list=PLNofiqKMHPgk7vi_T87eReoty6uAPJTgm&si=9xGnXpZFLHNzGw1O

const array6 = [1, 2, 3];
array.forEach(currentValue => {
    console.log(currentValue);
});
// 1
// 2
// 3
// と順番に出力される


// forEachメソッド内にthis.__valueを渡しているので、
// this.__valueは1, 2, 3と順番に値が渡されることになります。
// そのため、this.__valueを順番に出力すると1, 2, 3となります。

//arrow functionのthisは、その関数が定義された時点でのthisを参照する。
// そのため、this.__valueは1, 2, 3と順番に値が渡されることになります。

//arrow関数を使わない場合
const array7 = [1, 2, 3];  
array.forEach(function(currentValue) {
    console.log(currentValue);  // 1, 2, 3と順番に出力される
}
);

//この中で別関数をforEachで読み出す場合
const array8 = [1, 2, 3];
function log(currentValue) {
    console.log(currentValue);
}

array.forEach(log); // 1, 2, 3と順番に出力される

//途中でBreakする場合
const array9 = [1, 2, 3];
array.forEach(currentValue => {
    if (currentValue === 2) {
        return; // 2のときは処理を中断する
    }
    console.log(currentValue);
}
);
// 1
// 3
// と順番に出力される

//while文を使った例題(breakを使った場合)
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count1 = 0;
while (array10[count1] < 10) {
    console.log(array10[count1]);   // 結果: 1, 2, 3, 4
    if (array10[count1] === 5) {
        break; // 5のときは処理を中断する
    }
    count1++;
}

//fizzbuzz問題
// 1から100までの数値を出力するプログラムを作成してください。
// ただし、3の倍数のときは数値の代わりに「Fizz」を、
// 5の倍数のときは「Buzz」を、
// 3と5の倍数のときは「FizzBuzz」を出力してください。

//1から100までの数値を変数に格納する
const array11 = [];
for (let i = 1; i <= 100; i++) {
    array11.push(i);
}
//3の倍数のときは数値の代わりに「Fizz」を、
//5の倍数のときは「Buzz」を、
//3と5の倍数のときは「FizzBuzz」を出力してください。
array11.forEach(value => {
    if (value % 3 === 0 && value % 5 === 0) {
        console.log("FizzBuzz");
    } else if (value % 3 === 0) {
        console.log("Fizz");
    } else if (value % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(value);
    }
}   
);

//FizzBuzz問題の解答
const array12 = [];
for (let i = 1; i <= 100; i++) {
    array12.push(i);
}
array12.forEach(value => {
    if (value % 3 === 0 && value % 5 === 0) {
        console.log("FizzBuzz");
    } else if (value % 3 === 0) {
        console.log("Fizz");
    } else if (value % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(value);
    }
}
);

// 同様の処理をする isEvenIncluded 関数を実装してみます。 次のコードでは、break文が実行され、ループを抜けた後にreturn文で結果を返しています。
function isEven(num){
    return num % 2 === 0;
}

//引数のnumberに偶数が含まれているかどうかを返す関数
function isEvenIncluded(numbers) {
    let isEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (isEven(number)) {
            isEvenIncluded = true;
            break;
        }
    }
    return isEvenIncluded;
}

const array13 = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(array13)); // => true

//もっといい書き方
function isEven(num){
    return num % 2 === 0;
}

//引数のnumberに偶数が含まれているかどうかを返す関数
function isEvenIncluded(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (isEven(number)) {
            return true;
        }
    }
    return false;
}

const array14 = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(array14)); // => true


//偶数の場合はその数字を返す
function isEven(num){
    return num % 2 === 0;
}

function findEven(numbers){
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if (isEven(number)){
            return number;
        }
    }
}

const array15 = [1, 5, 10, 15, 20];
console.log(findEven(array15)); // => 10,20

// `number`が偶数ならtrueを返す
function isEven(num) {
    return num % 2 === 0;
}
// `numbers`に含まれている偶数だけを取り出す
function filterEven(numbers) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        // 偶数ではないなら、次のループへ
        if (!isEven(num)) {
            continue;
        }
        // 偶数を`results`に追加
        results.push(num);
    }
    return results;
}
const array20 = [1, 5, 10, 15, 20];
console.log(filterEven(array)); // => [10, 20]

//filtterを使った場合
function isEven(num) {
    return num % 2 === 0;   //偶数ならtrueを返す
}
// `numbers`に含まれている偶数だけを取り出す
function filterEven(numbers) {
    return numbers.filter(isEven);
}
const array21 = [1, 5, 10, 15, 20];
console.log(filterEven(array21)); // => [10, 20]


const array22 = [1, 2, 3];
for (const value of array) {
    console.log(value);
}