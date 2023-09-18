const emptyArray = [];
const numbers = [1, 2, 3];
// 2次元配列（配列の配列）
const matrix = [
    ["a", "b"],
    ["c", "d"]
];

console.log(matrix[0][0]); // => "a"
console.log(matrix[0][1]); // => "b"
console.log(matrix[1][0]); // => "c"
console.log(matrix[1][1]); // => "d"



const arr = [1, 2, 3];
console.log(arr[0]); // => 1
console.log(arr[1]); // => 2
console.log(arr[2]); // => 3

console.log(arr.length); // => 3
console.log(arr[arr.length - 1]); // => 3
console.log(arr[-1]); // => undefined

console.log(arr[1001]); // => undefined

//obj
const obj = { a: 1, b: 2, c: 3 };

//undefined
console.log(obj.d); // => undefined
console.log(obj[100]); // => undefine
console.log(obj[0]); // => 

// また、配列は常にlengthの数だけ要素を持っているとは限りません。 次のように、配列リテラルでは値を省略することで、未定義の要素を含めることができます。
//このような、配列の中に隙間があるものを疎な配列と呼びます。 一方、隙間がなくすべてのインデックスに要素がある配列を密な配列と呼びます

// 未定義の箇所が1つ含まれる疎な配列
// インデックスが1の値を省略しているので、カンマが2つ続いていることに注意
const sparseArray = [1, , 3];
console.log(sparseArray.length); // => 3
// 1番目の要素は存在しないため undefined が返る
console.log(sparseArray[1]); // => undefined こんなの知らん。エラーにならんのやな

//arrat.at
const arr1 = ["A", "B", "C", "D", "E"];
console.log(arr1.at(0)); // => "A"
console.log(arr1.at(-1)); // => "E"
console.log(arr1.at(100)); // => undefined

//key, valueをもつオブジェクトによる分割代入

const obj1 = { a: 1, b: 2, c: 3 };
const { a, c } = obj1;
console.log(a); // => 1
console.log(c); // => 3

// このように、オブジェクトの分割代入では、オブジェクトのプロパティ名と同じ名前の変数に値を代入できます。 また、オブジェクトのプロパティ名と同じ名前の変数がない場合は、undefinedが代入されます。


const denseArray = [1, undefined, 3];
// const sparseArray = [1, , 3];
// 要素自体は存在し、その値が`undefined`
console.log(Object.hasOwn(denseArray, 1)); // => true
// 要素自体が存在しない
console.log(Object.hasOwn(sparseArray, 3)); // => false そもそも要素が存在しないのでfalseになる（疎な配列）

// このように、配列の要素が存在しない場合は、undefinedが返るのではなく、要素自体が存在しないことを示すundefinedとは異なる値が返ります。 このundefinedとは異なる値を、配列の要素が存在しないことを示すundefinedと呼びます。

// colorプロパティを持つオブジェクトの配列
const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((obj) => {
    return obj.color === "blue";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }

//find
// colorプロパティを持つオブジェクトの配列

const findBlue = colors.find((obj) => {
    return obj.color === "blue";
}
);
console.log(findBlue); // => { "color": "blue" }
const findWhite = colors.find((obj) => {
    return obj.color === "white";
}
);
console.log(findWhite); // => undefined

//配列から指定範囲の要素を取り出す方法としてArrayのsliceメソッドが利用できます。 sliceメソッドは、第一引数の開始位置から第二引数の終了位置（終了位置の要素は含まない）までの範囲を取り出した新しい配列を返します。 第二引数は省略でき、省略した場合は配列の末尾の要素まで含んだ新しい配列を返します。

const array = ["A", "B", "C", "D", "E"];
// 2番目から4番目までの要素を取り出す
console.log(array.slice(2, 4)); // => ["C", "D"]
// 3番目から最後までの要素を取り出す
console.log(array.slice(3)); // => ["D", "E"]
// 配列のコピーを作成する
console.log(array.slice()); // => ["A", "B", "C", "D", "E"]

//配列の要素を削除する方法としてArrayのspliceメソッドが利用できます。 spliceメソッドは、第一引数の開始位置から第二引数の削除する要素数を指定し、第三引数以降に追加する要素を指定します。 第二引数は省略でき、省略した場合は第一引数で指定した位置から配列の末尾までの要素を削除します。 第三引数以降は省略でき、省略した場合は要素を追加しません。

const array1 = ["A", "B", "C", "D", "E"];
// 2番目から3番目までの要素を削除する
array1.splice(2, 2);
console.log(array1); // => ["A", "D", "E"]
// 2番目から3番目までの要素を削除し、その位置に"F"と"G"を追加する
array1.splice(2, 2, "F", "G");
console.log(array1); // => ["A", "D", "F", "G", "E"]
// 2番目から3番目までの要素を削除し、その位置に"F"と"G"を追加する
array1.splice(2, 0, "F", "G");
console.log(array1); // => ["A", "D", "F", "G", "F", "G", "E"]

if (array1.includes("A")) {
    console.log("Aが含まれている");
}
else {
    console.log("Aが含まれていない");
}

// このように、配列の要素が存在するかどうかを調べるには、Arrayのincludesメソッドを利用します。 includesメソッドは、第一引数に調べたい値を指定します。 第二引数には、第一引数と同じ値が見つからなかった場合に返す値を指定します。 第二引数は省略でき、省略した場合はfalseが返ります。

//array.some
const colors1 = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];

// `color`プロパティが"blue"のオブジェクトが配列に含まれるか
const isIncludedBlue = colors1.some((obj) => {
    return obj.color === "blue";
}
);
console.log(isIncludedBlue); // => true


//array.every
const numbers1 = [1, 2, 3, 4, 5];
// 全ての要素が整数かどうかをチェックする
const isAllIntegers = numbers1.every((value) => {
    return Number.isInteger(value);
    }
);
console.log(isAllIntegers); // => true

//colors1にconcat
const colors2 = [
    { "color": "red" },
    { "color": "green" }
];
const newColors = colors2.concat(
    { "color": "blue" },
    { "color": "yellow" }
);
console.log(newColors); // => [{ "color": "red" }, { "color": "green" }, { "color": "blue" }, { "color": "yellow" }]


// [ES2015] 配列の展開
// ...（Spread構文）を使うことで、配列リテラル中に既存の配列を展開できます。

// 次のコードでは、配列リテラルの末尾に配列を展開しています。 これは、Arrayのconcatメソッドで配列同士を結合するのと同じ結果になります。

// const array = ["A", "B", "C"];
// // Spread構文を使った場合
// const newArray = ["X", "Y", "Z", ...array];
// // concatメソッドの場合
// const newArrayConcat = ["X", "Y", "Z"].concat(array);
// console.log(newArray); // => ["X", "Y", "Z", "A", "B", "C"]
// console.log(newArrayConcat); // => ["X", "Y", "Z", "A", "B", "C"]
// 実行
// // Spread構文は、concatメソッドとは異なり、配列リテラル中の任意の位置に配列を展開できます。 そのため、次のように要素の途中に配列を展開できます。

// const array = ["A", "B", "C"];
// const newArray = ["X", ...array, "Z"];
// console.log(newArray); // => ["X", "A", "B", "C", "Z"]

// // FizzBuzz問題用
const numbers2 = [...Array(100).keys()].map((n) => n + 1);
console.log(numbers2); // => [1, 2, 3, ..., 100]

//number2をfizzbuzzに変換

const fizzBuzz = numbers2.map((n) => {
    if (n % 15 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}
);

console.log(fizzBuzz); // => [1, 2, "Fizz", 4, "Buzz", ..., 14, "FizzBuzz", 16, ...]

//https://jsprimer.net/basic/array/#mutable-immutable
//配列の破壊的な操作と非破壊的な操作

//forEach
const array2 = ["A", "B", "C"];
array2.forEach((value, index, array) => {
    console.log(value, index, array);
}
);
// => A 0 ["A", "B", "C"]
// => B 1 ["A", "B", "C"]
// => C 2 ["A", "B", "C"]
const value = array2.forEach((value) => {
    console.log(value); // => A, B, C
}
);
console.log(value); // => undefined


//array.reduce
const array3 = [1, 2, 3, 4, 5];
const sum = array3.reduce((accumulator, value) => {
    return accumulator + value;
}
);

console.log(sum); // => 15
//constで宣言した変数は再代入できないため、reduceメソッドのコールバック関数の第一引数であるaccumulatorには、コールバック関数の中で値を代入しても、外側の変数には影響しません。 
//そのため、reduceメソッドのコールバック関数の中でaccumulatorに値を代入しても、reduceメソッドの戻り値には影響しません。

// forEachで同じことをしようとするとletを使う必要がある
let sum1 = 0;
array3.forEach((value) => {
    sum1 += value;
}
);
console.log(sum1); // => 15

//letで宣言した変数は再代入が可能なため、意図しない箇所で変数の値が変更され、バグの原因となることがあります。 そのため、できる限り変数をconstで宣言したい場合にはreduceメソッドは有用です。
//  一方で、reduceメソッドは可読性があまりよくないため、コードの意図が伝わりにくいというデメリットもあります。

// reduceメソッドには利点と可読性のトレードオフがありますが、利用する場合はreduceメソッドを扱う処理を関数で囲むなど処理の意図がわかるように工夫をする必要があります。

// const array = [1, 2, 3];
// function sum(array) {
//     return array.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//     }, 0); // ← 初期値を指定。今回だと0
// }
// console.log(sum(array)); // => 6


//高階関数に関して
// ECMAScriptのバージョン名と発行年
const ECMAScriptVersions = [
    { name: "ECMAScript 1", year: 1997 },
    { name: "ECMAScript 2", year: 1998 },
    { name: "ECMAScript 3", year: 1999 },
    { name: "ECMAScript 5", year: 2009 },
    { name: "ECMAScript 5.1", year: 2011 },
    { name: "ECMAScript 2015", year: 2015 },
    { name: "ECMAScript 2016", year: 2016 },
    { name: "ECMAScript 2017", year: 2017 },
];
// メソッドチェーンで必要な加工処理を並べている
const versionNames = ECMAScriptVersions
    // 2000年以下のデータに絞り込み
    .filter(ECMAScript => ECMAScript.year <= 2000)
    // それぞれの要素から`name`プロパティを取り出す
    .map(ECMAScript => ECMAScript.name);
console.log(versionNames); // => ["ECMAScript 1", "ECMAScript 2", "ECMAScript 3"]


// まとめ
// この章では配列について学びました。

// 配列は順序を持った要素を格納できるオブジェクトの一種
// 配列には破壊的なメソッドと非破壊的なメソッドがある
// 配列には反復処理を行う高階関数となるメソッドがある
// メソッドチェーンは配列のメソッドが配列を返すことを利用している
// 配列はJavaScriptの中でもよく使われるオブジェクトで、メソッドの種類も多いです。 この書籍でもすべてのメソッドは紹介していないため、詳しくはArrayについてのドキュメントも参照してみてください。

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array