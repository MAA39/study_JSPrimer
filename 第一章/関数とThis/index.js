// まとめ
// thisは状況によって異なる値を参照する性質を持ったキーワードであることを紹介しました。 そのthisの評価結果をまとめると次の表のようになります。

// 実行コンテキスト	strict mode	コード	thisの評価結果
// Script	＊	this	globalThis
// Script	＊	const fn = () => this	globalThis
// Script	NO	const fn = function(){ return this; }	globalThis
// Script	YES	const fn = function(){ return this; }	undefined
// Script	＊	const obj = { method: () => { return this; } }	globalThis
// Module	YES	this	undefined
// Module	YES	const fn = () => this	undefined
// Module	YES	const fn = function(){ return this; }	undefined
// Module	YES	const obj = { method: () => { return this; } }	undefined
// ＊	＊	const obj = { method(){ return this; } }	obj
// ＊	＊	const obj = { method: function(){ return this; } }	obj
// ＊はどの場合でもthisの評価結果に影響しないということを示しています。

// 実際にブラウザで実行した結果はWhat is this value in JavaScriptというサイトで確認できます。

// thisはオブジェクト指向プログラミングの文脈でJavaScriptに導入されました。 メソッド以外においてもthisは評価できますが、実行コンテキストやstrict modeなどによって結果が異なり、混乱の元となります。 そのため、メソッドではない通常の関数においてはthisを使うべきではありません。1

// また、メソッドにおいてもthisは呼び出し方によって異なる値となり、それにより発生する問題と対処法について紹介しました。 コールバック関数におけるthisはArrow Functionを使うことでわかりやすく解決できます。 この背景にはArrow Functionで定義した関数はthisを持たないという性質があります。

// 1. ES2015の仕様編集者であるAllen Wirfs-Brock氏もただの関数においてはthisを使うべきではないと述べている。https://twitter.com/awbjs/status/938272440085446657; ↩


// スクリプトにおけるthis

{/* <script>
// 実行コンテキストは"Script"
console.log(this); // => window
</script>

// モジュールにおけるthis

<script type="module">
// 実行コンテキストは"Module"
console.log(this); // => undefined
</script> */}

// ブラウザでは`window`オブジェクト、Node.jsでは`global`オブジェクトを参照する
console.log(globalThis);
// => Browser: window
// => Node.js: global

// 関数とメソッドにおけるthis

// 関数の種類
// 「関数と宣言」の章で詳しく紹介していますが、関数の定義方法と呼び出し方について改めて振り返ってみましょう。 関数を定義する場合には、次の3つの方法を利用します。

// `function`キーワードからはじめる関数宣言
function fn1() {}
// `function`を式として扱う関数式
const fn2 = function() {};
// Arrow Functionを使った関数式
const fn3 = () => {};

// 関数宣言
function fn() {}
// 関数呼び出し
fn();

//メソッドの種類
const obj = {
    // finction
    method1: function() {},
    // functionを省略した省略記法
    method2() {},
    // Arrow Function
    method3: () => {},
};
