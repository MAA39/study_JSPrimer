/*
データ型を大きく分けると、プリミティブ型とオブジェクトの2つに分類されます。

プリミティブ型（基本型）は、真偽値や数値などの基本的な値の型のことです。 プリミティブ型の値は、一度作成したらその値自体を変更できないというイミュータブル（immutable）の特性を持ちます。 JavaScriptでは、文字列も一度作成したら変更できないイミュータブルの特性を持ち、プリミティブ型の一種として扱われます。

一方、プリミティブ型ではないものをオブジェクト（複合型）と呼び、 オブジェクトは複数のプリミティブ型の値またはオブジェクトからなる集合です。 オブジェクトは、一度作成した後もその値自体を変更できるためミュータブル（mutable）の特性を持ちます。 オブジェクトは、値そのものではなく値への参照を経由して操作されるため、参照型のデータとも言います。

*/

console.log(typeof true);// => "boolean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof "JavaScript"); // => "string"
console.log(typeof Symbol("シンボル"));// => "symbol"
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function() {}); // => "function"

//オブジェクト

const obj = { key: "value" }
const obj2 = {}

// ドット記法 
console.log(obj.key); // => "value"
// ブラケット記法
console.log(obj["key"]); // => "value"
// ドット記法では、プロパティ名が変数名と同じく識別子である必要があります。 そのため、次のように識別子として利用できないプロパティ名はドット記法として書くことができません
// プロパティ名は文字列の"123"
const object = {
    "123": "value"
};
// OK: ブラケット記法では、文字列として書くことができる
console.log(object["123"]); // => "value"
// NG: ドット記法では、数値からはじまる識別子は利用できない
// object.123 -> SyntaxError: Unexpected number

// プロパティ名が変数名と同じであれば、ドット記法とブラケット記法は同じ結果になります。

const emptyArray = []; // 空の配列を作成
const array = [1, 2, 3]; // 値を持った配列を作成

//オブジェクト型にしかプロパティは参照できなさそうだが
//JavaScriptではプリミティブ型のデータに対してもオブジェクトのように参照できる仕組みがある

//これは、プリミティブ型のデータのプロパティへアクセスする際に、対応するラッパーオブジェクトへ暗黙的に変換してからプロパティへアクセスするためです

//そのためプリミティブ型のデータであってもオブジェクトのようにプロパティ（メソッドなども含む）を参照できると

console.log(true == [1]); // => true    になるの解せんな