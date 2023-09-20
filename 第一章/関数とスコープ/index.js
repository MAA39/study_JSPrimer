function fn(arg) {
    // fn関数のスコープ内から仮引数`arg`は参照できる
    console.log(arg); // => 1
}
fn(1);
// fn関数のスコープ外から`arg`は参照できないためエラー
console.log(arg); // => ReferenceError: arg is not defined
//関数スコープ

// 解釈されたコード
// `hello`関数の宣言が巻き上げられる
function hello(){
    return "Hello";
}

hello(); // => "Hello"

// // 関数式[コラム] 即時実行関数
// 即時実行関数（IIFE, Immediately-Invoked Function Expression）は、 グローバルスコープの汚染を避けるために生まれたイディオムです。

// 次のように、無名関数を宣言した直後に呼び出すことで、任意の処理を関数のスコープに閉じて実行できます。 関数スコープを作ることでfoo変数は無名関数の外側からはアクセスできません。

// / 無名関数を宣言 + 実行を同時に行っている
(function() {
    // 関数のスコープ内でfoo変数を宣言している
    var foo = "foo";
    console.log(foo); // => "foo"
})();
// foo変数のスコープ外
console.log(typeof foo === "undefined"); // => true

// クロージャー
// 最後にこの章ではクロージャーと呼ばれる関数とスコープに関わる性質について見ていきます。 クロージャーとは「外側のスコープにある変数への参照を保持できる」という関数が持つ性質のことです。

// クロージャーは言葉で説明しただけではわかりにくい性質です。 このセクションでは、クロージャーを使ったコードがどのように動くのかを理解することを目標にします。

// 次の例ではcreateCounter関数が、関数内で定義したincrement関数を返しています。 その返されたincrement関数をmyCounter変数に代入しています。このmyCounter変数を実行するたびに1, 2, 3と1ずつ増えた値を返しています。

// さらに、もう一度createCounter関数を実行して、その返り値をnewCounter変数に代入します。 newCounter変数も実行するたびに1ずつ増えていますが、myCounter変数とその値を共有しているわけではないことがわかります。

// // `increment`関数を定義して返す関数
function createCounter() {
    let count = 0;
    // `increment`関数は`count`変数を参照
    function increment() {
        count = count + 1;
        return count;
    }
    return increment;
}
// `myCounter`は`createCounter`が返した関数を参照
const myCounter = createCounter();
myCounter(); // => 1
myCounter(); // => 2
// 新しく`newCounter`を定義する
const newCounter = createCounter();
newCounter(); // => 1
newCounter(); // => 2
// `myCounter`と`newCounter`は別々の状態持っている
myCounter(); // => 3
newCounter(); // => 3


// 静的スコープ
// クロージャーを理解するために、今まで意識してこなかったスコープの性質について見ていきます。 JavaScriptのスコープには、どの識別子がどの変数を参照するかが静的に決定されるという性質があります。 つまり、コードを実行する前にどの識別子がどの変数を参照しているかがわかるということです。

// 次のような例を見てみます。 printX関数内で変数xを参照していますが、変数xはグローバルスコープと関数runの中で、それぞれ定義されています。 このときprintX関数内のxという識別子がどの変数xを参照するかは静的に決定されます。

// 結論から言えば、printX関数中にある識別子xはグローバルスコープ（＊1）の変数xを参照します。 そのため、printX関数の実行結果は常に10となります。

const x = 10; // ＊1

function printX() {
    // この識別子`x`は常に ＊1 の変数`x`を参照する
    console.log(x); // => 10
}

function run() {
    const x = 20; // ＊2
    printX(); // 常に10が出力される
}

run();


function printX() {
    const x = "X";
    console.log(x); // => "X"
}

printX();
// この時点で`"X"`を参照するものはなくなる -> 解放される

function createArray() {
    const tempArray = [1, 2, 3];
    return tempArray;
}
const array = createArray();
console.log(array); // => [1, 2, 3]
// 変数`array`が`[1, 2, 3]`という値を参照している -> 解放されない

// クロージャーがなぜ動くのか
// ここまでで「静的スコープ」と「メモリ管理の仕組み」について説明してきました。

// 静的スコープ: ある変数がどの値を参照するかは静的に決まる
// メモリ管理の仕組み: 参照されなくなったデータはガベージコレクションにより解放される

const createCounter = () => {
    let count = 0;
    return function increment() {
        // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
        count = count + 1;
        return count;
    };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数
const myCounter = createCounter();
// myCounter関数の実行結果は`count`の評価結果
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2

// JavaScriptの関数は静的スコープとメモリ管理という2つの性質を常に持っています。そのため、ある意味ではすべての関数がクロージャーとなりますが、ここでは関数が特定の変数を参照することで関数が状態を持っていることを指します。

// 先ほどの例ではcreateCounter関数を実行するたびに、それぞれcountとincrement関数が定義されます。そのため、createCounter関数を実行すると、それぞれ別々のincrement関数が定義され、別々のcount変数を参照します。

// 次のようにcreateCounter関数を複数回呼び出してみると、別々の状態を持っていることが確認できます。

const createCounter = () => {
    let count = 0;
    return function increment() {
        // 変数`count`を参照し続けている
        count = count + 1;
        return count;
    };
};
// countUpとnewCountUpはそれぞれ別のincrement関数(内側にあるのも別のcount変数)
const countUp = createCounter();
const newCountUp = createCounter();
// 参照している関数(オブジェクト)は別であるため===は一致しない
console.log(countUp === newCountUp);// false
// それぞれの状態も別となる
console.log(countUp()); // => 1
console.log(newCountUp()); // => 1
\\
// まとめ
// この章では関数を中心にスコープについて学びました。

// 関数やブロックはスコープを持つ
// スコープはネストできる
// もっとも外側にはグローバルスコープがある
// スコープチェーンは内側から外側のスコープへと順番に変数が定義されているか探す仕組みのこと
// varキーワードでの変数宣言やfunctionでの関数宣言では巻き上げが発生する
// クロージャーは静的スコープとメモリ管理の仕組みからなる関数が持つ性質
// 1. この仕組みはTemporal Dead Zone（TDZ）と呼ばれます。 ↩
// 2. ECMAScriptの仕様ではガベージコレクションの実装の規定はないため、実装依存の処理となります。 ↩