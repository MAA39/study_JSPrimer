// まとめ
// この章ではMapとSetについて学びました。

// Mapはキーと値の組み合わせからなるコレクションを扱うビルトインオブジェクト
// Mapのキーはプロトタイプオブジェクトのプロパティと名前が衝突しないため意図しないマッピングを避けられる
// WeakMapはキーを弱い参照で持つMapと同様のビルトインオブジェクト
// Setは重複する値がないことを保証した順序を持たないコレクションを扱うビルトインオブジェクト
// WeakSetは値を弱い参照で持つSetと同様のビルトインオブジェクト
// es2023. ES2023でSymbolも扱えるように仕様が変更されています。 ↩
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

"use strict";
const person = {
    fullName: "Brendan Eich",
    sayName: function() {
        // `this`は呼び出し元によって異なる
        return this.fullName;
    }
};
// `sayName`メソッドは`person`オブジェクトに所属する
// `this`は`person`オブジェクトとなる
console.log(person.sayName()); // => "Brendan Eich"
// `person.sayName`を`say`変数に代入する
const say = person.sayName;
// 代入したメソッドを関数として呼ぶ
// この`say`関数はどのオブジェクトにも所属していない
// `this`はundefinedとなるため例外を投げる
say(); // => TypeError: Cannot read property 'fullName' of undefined

// このように、Arrow Function以外の関数において、thisは定義したときではなく実行したときに決定されます。 そのため、関数にthisを含んでいる場合、その関数は意図した呼ばれ方がされないと間違った結果が発生するという問題があります。

// この問題の対処法としては大きく分けて2つあります。

// 1つはメソッドとして定義されている関数はメソッドとして呼ぶということです。 メソッドをわざわざただの関数として呼ばなければそもそもこの問題は発生しません。

// もう1つは、thisの値を指定して関数を呼べるメソッドで関数を実行する方法です。 この方法はcallメソッドやapplyメソッド、bindメソッドを使います。

// 対処法: call、apply、bindメソッド
// 関数やメソッドのthisを明示的に指定して関数を実行する方法もあります。 Function（関数オブジェクト）にはcall、apply、bindといった明示的にthisを指定して関数を実行するメソッドが用意されています。

// callメソッドは第一引数にthisとしたい値を指定し、残りの引数には呼び出す関数の引数を指定します。 暗黙的に渡されるthisの値を明示的に渡せるメソッドと言えます。

// 関数.call(thisの値, ...関数の引数);
// 次の例ではthisにpersonオブジェクトを指定した状態でsay関数を呼び出しています。 callメソッドの第二引数で指定した値が、say関数の仮引数messageに入ります。

"use strict";
function say(message) {
    return `${message} ${this.fullName}！`;
}
const person = {
    fullName: "Brendan Eich"
};
// `this`を`person`にして`say`関数を呼びだす
console.log(say.call(person, "こんにちは")); // => "こんにちは Brendan Eich！"
// `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

"use strict";
function say(message) {
    return `${message} ${this.fullName}！`;
}
const person = {
    fullName: "Brendan Eich"
};
// `this`を`person`にして`say`関数を呼びだす
// callとは異なり引数を配列として渡す
console.log(say.apply(person, ["こんにちは"])); // => "こんにちは Brendan Eich！"
// `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

// callメソッドとapplyメソッドの違いは、関数の引数への値の渡し方が異なるだけです。 また、どち   らのメソッドもthisの値が不要な場合はnullを渡すのが一般的です。

function add(x, y) {
    return x + y;
}
// `this`が不要な場合は、nullを渡す
console.log(add.call(null, 1, 2)); // => 3
console.log(add.apply(null, [1, 2])); // => 3

// bindメソッドはthisの値を指定して関数を呼び出すという点ではcallメソッドと同じですが、関数を実行するのではなくthisを指定した新しい関数を返します。

// 問題: コールバック関数とthis

"use strict";
// strict modeを明示しているのは、thisがグローバルオブジェクトに暗黙的に変換されるのを防止するため
const Prefixer = {
    prefix: "pre",
    /**
     * `strings`配列の各要素にprefixをつける
     */
    prefixArray(strings) {
        return strings.map(function(str) {
            // コールバック関数における`this`は`undefined`となる(strict mode)
            // そのため`this.prefix`は`undefined.prefix`となり例外が発生する
            return this.prefix + "-" + str;
        });
    }
};
// `prefixArray`メソッドにおける`this`は`Prefixer`
Prefixer.prefixArray(["a", "b", "c"]); // => TypeError: Cannot read property 'prefix' of undefined


// このとき、Arrayのmapメソッドに渡しているコールバック関数はcallback()のようにただの関数として呼び出されます。 つまり、コールバック関数として呼び出すとき、この関数にはベースオブジェクトはありません。 そのためcallback関数のthisはundefinedとなります。
//スコープしているのがPrefixerなので、Prefixer.prefixとする必要がある。
// この問題を解決するには、コールバック関数をArrow Functionにするという方法があります。 Arrow Functionはthisを持たないため、thisが暗黙的に変換されることがありません。
//ex
"use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        // Arrow Functionにすると`this`は`undefined`となるため、`this.prefix`は`undefined.prefix`となり例外が発生する
        return strings.map(str => this.prefix + "-" + str);
    }
};
Prefixer.prefixArray(["a", "b", "c"]); // => ["pre-a", "pre-b", "pre-c"]

//Copiltotの定期ようしたコードの方が美しい。Good.

"use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((str) => {
            // Arrow Function自体は`this`を持たない
            // `this`は外側の`prefixArray`関数が持つ`this`を参照する
            // そのため`this.prefix`は"pre"となる
            return this.prefix + "-" + str;
        });
    }
};
// このとき、`prefixArray`のベースオブジェクトは`Prefixer`となる
// つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

// Arrow Functionはthisを暗黙的な引数として受けつけないということです。 そのため、Arrow Function内にはthisが定義されていま

"use strict";


// 定義したオブジェクトとメソッド
const person = {
    name: "Brendan Eich",
    age: 60,
    sayDetails: function(newName, newAge) {
        if (newName) {
            this.name = newName;
        }
        if (newAge) {
            this.age = newAge;
        }
        return `${this.name} is ${this.age} years old.`;
    }
};

// 上書きしないでメソッドを呼び出し
console.log(person.sayDetails());  // => "Brendan Eich is 60 years old."

// 変数を渡してプロパティを上書きしながらメソッドを呼び出し
console.log(person.sayDetails("Tim Berners-Lee", 66));  // => "Tim Berners-Lee is 66 years old."
onst person = {
    name: "Brendan Eich",
    age: 60,
    sayDetails: function(newName, newAge) {
        if (newName) {
            this.name = newName;
        }
        if (newAge) {
            this.age = newAge;
        }
        return `${this.name} is ${this.age} years old.`;
    }
};

// 上書きしないでメソッドを呼び出し
console.log(person.sayDetails());  // => "Brendan Eich is 60 years old."

// 変数を渡してプロパティを上書きしながらメソッドを呼び出し
console.log(person.sayDetails("Tim Berners-L

// このArrow Functionにおけるthisは呼び出し方の影響を受けません。 つまり、コールバック関数がどのように呼ばれるかという実装についてを考えることなくthisを扱えます。

const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((str) => {
            // `Prefixer.prefixArray()` と呼び出されたとき
            // `this`は常に`Prefixer`を参照する
            return this.prefix + "-" + str;
        });
    }
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

// WeakSet
// WeakSetは弱い参照で値を持つセットです。 WeakSetはSetと似ていますが、iterableではないので追加した値を反復処理できません。 つまり、WeakSetは値の追加と削除、存在確認以外のことができません。 データの格納ではなく、データの一意性を確認することに特化したセットと言えるでしょう。

// また、弱い参照で値を持つ特性上、WeakSetの値として使えるのは参照型のオブジェクトとSymboles2023だけです。