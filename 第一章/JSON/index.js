// JSONはJavaScript Object Notationの略で、JavaScriptのオブジェクトリテラルをベースに作られた軽量なデータフォーマットです。 JSONの仕様はECMA-404として標準化されています。 
//JSONは、人間にとって読み書きが容易で、マシンにとっても簡単にパースや生成を行える形式になっています。 そのため、多くのプログラミング言語がJSONを扱う機能を備えています。

// JSONはJavaScriptのオブジェクトリテラル、配列リテラル、各種プリミティブ型の値を組み合わせたものです。 ただしJSONとJavaScriptは一部の構文に違いがあります。 たとえばJSONでは、
//オブジェクトリテラルのキーを必ずダブルクォートで囲まなければいけません。 
//また、小数点から書きはじめる数値リテラルや、先頭がゼロからはじまる数値リテラルも使えません。 これらは機械がパースしやすくするために仕様で定められた制約です。

{
    "object": {
        "number": 1,
        "string": "js-primer",
        "boolean": true,
        "null": null,
        "array": [1, 2, 3]
    }
}

// JSON文字列をオブジェクトに変換する
// JSON.parseメソッドは引数に与えられた文字列をJSONとしてパースし、その結果をJavaScriptのオブジェクトとして返す関数です。 
//次のコードは簡単なJSON形式の文字列をJavaScriptのオブジェクトに変換する例です。

// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);
console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"
// 実行
// 文字列がJSONの配列を表す場合は、JSON.parseメソッドの返り値も配列になります。

const json = "[1, 2, 3]";
console.log(JSON.parse(json)); // => [1, 2, 3]

//log
console.log('json', json) // => [1, 2, 3]
console.log('obj', obj) // => [1, 2, 3]
console.log('json.parse', JSON.parse(json)) // => [1, 2, 3]
console.log('JSON TYPE', typeof JSON.parse(json))   // => object
console.log('JSON.stringify', JSON.stringify(obj))  // => string
console.log('JSON.stringify TYPE', typeof JSON.stringify(obj))  // => string
console.log('JSON TYPE', typeof json)   // => string

// JSON.stringifyメソッドにはオプショナルな引数が2つあります。 第二引数はreplacer引数とも呼ばれ、関数あるいは配列を渡せます。 関数を渡した場合は引数にプロパティのキーと値が渡され、その返り値によって文字列に変換される際の挙動をコントロールできます。 次の例は値がnullであるプロパティを除外してJSONに変換するreplacer引数の例です。 replacer引数の関数でundefinedが返されたプロパティは、変換後のJSONに含まれなくなります。

const obj = { id: 1, name: "js-primer", bio: null };
const replacer = (key, value) => {
    if (value === null) {
        return undefined;
    }   
    return value;
};
console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'
// 実行
// replacer引数に配列を渡した場合はプロパティの許可リストとして使われ、 その配列に含まれる名前のプロパティだけが変換されます。

const obj = { id: 1, name: "js-primer", bio: null };
const replacer = ["id", "name"];
console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'

const obj = { id: 1, name: "js-primer" };
console.log(JSON.stringify(obj, null, "\t"));
/*
{
   "id": 1,
   "name": "js-primer"
}
*/


// オブジェクトがシリアライズされる際は、そのオブジェクトの列挙可能なプロパティだけが再帰的にシリアライズされます。 RegExpやMap、Setなどのインスタンスは列挙可能なプロパティを持たないため、空のオブジェクトに変換されます。


const obj = {
    foo: "foo",
    toJSON() {
        return "bar";
    }
};
console.log(JSON.stringify(obj)); // => '"bar"'
console.log(JSON.stringify({ x: obj })); // => '{"x":"bar"}'
// 実行
// toJSONメソッドは自作のクラスを特殊な形式でシリアライズする目的などに使われます。

// まとめ
// この章では、JSONについて学びました。

// JSONはJavaScriptのオブジェクトリテラルをベースに作られた軽量なデータフォーマット
// JSONオブジェクトを使ったシリアライズとデシリアライズ
// JSON形式にシリアライズできないオブジェクトもある