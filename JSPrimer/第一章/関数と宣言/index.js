const readline = require('readline');

console.log("Hello World!");

function unfollow() {
  console.log("フォローを外しました");
}

function confirmed(fn) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('実行しますか？ (y/N) ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      fn();
    }
    rl.close();
  });
}

confirmed(unfollow);

//実務でもよく見る分割代入
//関数の引数と分割代入
function printUserId(user) {
  console.log(user.id); // => 42
}
const user = {
  id: 42
};
printUserId(user);

//[ES2015] 関数の引数と分割代入

// 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
function printUserId({ id }) {
  console.log(id); // => 42
}
const user1 = {
  id: 42
};
printUserId(user1);
//これpropsでよく見るなあ。これだ。



//[ES2015] Arrow Function

// 仮引数の数と定義
const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる

/*

Arrow Functionについては次のような特徴があります。

名前をつけることができない（常に無名関数）
thisが静的に決定できる（詳細は「関数とスコープ」の章で解説します）
functionキーワードに比べて短く書くことができる
newできない（コンストラクタ関数ではない）
arguments変数を参照できない
たとえばfunctionキーワードの関数式では、値を返すコールバック関数を次のように書きます。 配列のmapメソッドは、配列の要素を順番にコールバック関数へ渡し、そのコールバック関数が返した値を新しい配列にして返します。

*/

const array = [1, 2, 3];
// 1,2,3と順番に値が渡されコールバック関数（無名関数）が処理する
const doubleArray = array.map(function(value) {
    return value * 2; // 返した値をまとめた配列ができる
});
console.log(doubleArray); 

//Arrow Functionでは、次のように書くことができます。
const doubble = array.map(value => value *2)
console.log(doubble);

//こんな感じのやつコードで見ましたぞ。。。
const fnNew = (x, y, z) => {
  return x + y + z
}

console.log(fnNew(1,2,3))

//コールバック関数としてのArrow Function
//コールバック関数としてArrow Functionを使う場合は、次のように書くことができます。
const array1 = [1, 2, 3];
// 1,2,3と順番に値が渡されコールバック関数（無名関数）が処理する
const doubleArray1 = array1.map(value => value * 2);
console.log(doubleArray1); // => [2, 4, 6]

array1.forEach(value => {
  console.log(value * 2); // 2, 4, 6と順番に出力される
}
);


const obj = {
  method() {
      return "this is method";
  }
};
console.log(obj.method()); // => "this is method"

//メソッドの短縮記法 これよくわかんないがどこかで現れたら見てみること