/*
まとめ
この章では、プロトタイプオブジェクトについて学びました。

プロトタイプオブジェクトはオブジェクトの作成時に自動的に作成される
ObjectのプロトタイプオブジェクトにはtoStringなどのプロトタイプメソッドが定義されている
ほとんどのオブジェクトはObject.prototypeを継承することでtoStringメソッドなどを呼び出せる
プロトタイプメソッドとインスタンスメソッドではインスタンスメソッドが優先される
Object.createメソッドを使うことでプロトタイプオブジェクトを継承しないオブジェクトを作成できる
プロトタイプオブジェクトに定義されているメソッドがどのように参照されているかを確認しました。 このプロトタイプの詳しい仕組みについては「クラス」の章で改めて解説します。

*/

//また、JavaScriptにはtoString以外にも、オブジェクトに自動的に実装されるメソッドがあります。 これらのオブジェクトに組み込まれたメソッドをビルトインメソッドと呼びます。


// プロトタイプメソッドとインスタンスメソッドの優先順位
// プロトタイプメソッドと同じ名前のメソッドがインスタンスオブジェクトに定義されている場合もあります。 その場合には、インスタンスに定義したメソッドが優先して呼び出されます。

// 次のコードでは、ObjectのインスタンスであるcustomObjectにtoStringメソッドを定義しています。 実行してみると、プロトタイプメソッドよりも優先してインスタンスのメソッドが呼び出されていることがわかります。

// オブジェクトのインスタンスにtoStringメソッドを定義
const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(customObject.toString()); // => "custom value"

//-> 同じ名前のメソッドがプロトタイプオブジェクトとインスタンスオブジェクトに定義されている場合は、インスタンスオブジェクトのメソッドが優先して呼び出される

const obj = {};
// `obj`というオブジェクト自体に`toString`メソッドが定義されているわけではない
console.log(Object.hasOwn(obj, "toString")); // => false
// `in`演算子は指定されたプロパティ名が見つかるまで親をたどるため、`Object.prototype`まで見にいく
console.log("toString" in obj); // => true


//toStringメソッドがある場合は、そのメソッドが呼び出されます。 しかし、toStringメソッドがない場合は、Object.prototype.toStringメソッドが呼び出されます。 そのため、Object.prototype.toStringメソッドは、オブジェクトにtoStringメソッドがあるかどうかを調べるために使われることがあります。
const tosringobj = {
    toString() {
        return "custom value";
    }
};
console.log(tosringobj.toString()); // => "custom value"

console.log(Object.hasOwn(tosringobj, "toString")); // => true
console.log("toString" in tosringobj); // => true


// しかし、ES2015からは本物のMapが利用できるため、Object.create(null)をMapの代わりに利用する必要はありません。 Mapについては「Map/Set」の章で詳しく紹介します。

// またObject.create(null)によって作成される空のオブジェクトは、Object.hasOwn静的メソッドがES2022で導入された理由でもあります。

// 次のように、Object.prototypeを継承しないオブジェクトは、Object.prototype.hasOwnPropertyメソッドを呼び出せません。 そのため、オブジェクトがプロパティを持っているかということを確認する際に、単純にはhasOwnPropertyメソッドが使えないという状況が出てきました。

// // Mapのような空オブジェクト
const mapLike1 = Object.create(null);
// `Object.prototype`を継承していないため呼び出すと例外が発生する
console.log(mapLike1.hasOwnProperty("key")); // => Error: hasOwnPropertyメソッドは呼び出せない
実行
// ES2022から導入されたObject.hasOwn静的メソッドは、対象のオブジェクトがObject.prototypeを継承していないかは関係なく利用できます。

// Mapのような空オブジェクト
const mapLike = Object.create(null);
// keyは存在しない
console.log(Object.hasOwn(mapLike, "key")); // => false