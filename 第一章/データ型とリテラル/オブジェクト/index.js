const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj = {
    name: name
};
console.log(obj); // => { name: "名前" }

// オブジェクトリテラルの場合は、プロパティ名と変数名が同じ場合は、プロパティ名を省略できます。

// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj1 = {
    name
};
console.log(obj1); // => { name: "名前" }

// オブジェクトリテラルの場合は、プロパティ名と変数名が同じ場合は、プロパティ名を省略できます。

// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj2 = {
    name
};
console.log(obj2); // => { name: "名前" }
//key, Valueの省略記法であり、そこそこ一般的に使われるらしい。

//ループ処理とオブジェクトの分割代入
//オブジェクトの分割代入とループ処理を組み合わせると、オブジェクトのプロパティを順番に取り出すことができます。
// このような処理は、オブジェクトのプロパティを順番に処理することを反復処理と呼びます。
// この章では、オブジェクトの分割代入とループ処理を組み合わせてオブジェクトのプロパティを順番に処理する方法を学びます。
//例
const obj3 = { a: 1, b: 2, c: 3 };
// `Object.keys`で`obj`のプロパティ名を配列として取得する
// 配列の`forEach`メソッドで各要素を順番に処理する
Object.keys(obj3).forEach(prop => {
    // 各要素の値を取得して表示する
    console.log(`key: ${prop}, value: ${obj3[prop]}`);
}
);
// 結果:
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3

//Key,Valueに同じ文字列を使う　かつ　分割代入を使うときの注意点
// オブジェクトの分割代入とループ処理を組み合わせると、オブジェクトのプロパティを順番に取り出すことができます。
// このような処理は、オブジェクトのプロパティを順番に処理することを反復処理と呼びます。
// この章では、オブジェクトの分割代入とループ処理を組み合わせてオブジェクトのプロパティを順番に処理する方法を学びます。
//例
const obj44 = { 
    name };
// `Object.keys`で`obj`のプロパティ名を配列として取得する
// 配列の`forEach`メソッドで各要素を順番に処理する
Object.keys(obj4).forEach(prop => {
    // 各要素の値を取得して表示する
    console.log(`key: ${prop}, value: ${obj4[prop]}`);
}
);

const userName = "MAAA";
const obj4 = { 
    userName 
};
Object.keys(obj4).forEach(prop => {
    console.log(`key: ${prop}, value: ${obj4[prop]}`);
});

//でストラクチャリング(分割代入)を使った場合
const obj5 = {
    firstName: "名前",
    age: 28,
}
const { firstName, age } = obj5;
console.log(firstName);
console.log(age);

// // yourFile.js
// const DEFAULT_FILE_TYPE = "image/jpeg";

// const CONTENT_FILE_TYPE_MAP = {
//   "image": {
//     directory: "images",
//     extension: ".jpg",
//     contentType: "image/jpeg",
//   },
//   "video": {
//     directory: "videos",
//     extension: ".mp4",
//     contentType: "video/mp4",
//   },
// };

// const file = {
//   type: "image",
// };

// const {
//   directory = "images",
//   extension = ".webp",
//   contentType = DEFAULT_FILE_TYPE,
// } = CONTENT_FILE_TYPE_MAP[file.type] ?? {};

// console.log(directory); // 出力: "images"
// console.log(extension); // 出力: ".jpg"
// console.log(contentType); // 出力: "image/jpeg"

//Optional Chaining
function printWidgetTitle(widget) {
  // 例外を避けるために`widget`のプロパティの存在を順番に確認してから、値を表示している
  if (widget.window !== undefined && widget.window.title !== undefined) {
      console.log(`ウィジェットのタイトルは${widget.window.title}です`);
  } else {
      console.log("ウィジェットのタイトルは未定義です");
  }
}
// タイトルが定義されているwidget
printWidgetTitle({
  window: {
      title: "Book Viewer"
  }
});
// タイトルが未定義のwidget
printWidgetTitle({
  // タイトルが定義されてない空のオブジェクト
});

//?? とOptional Chainingを使った場合

function printWidgetTitle(widget) {
  const title = widget?.window?.title ?? "未定義";
  console.log(`ウィジェットのタイトルは${title}です`);
}
printWidgetTitle({
  window: {
      title: "Book Viewer"
  }
}); // "ウィジェットのタイトルはBook Viewerです" と出力される
printWidgetTitle({
  // タイトルが定義されてない空のオブジェクト
}); // "ウィジェットのタイトルは未定義です" と出力される


//Optional chaining演算子（?.）はブラケット記法（[]）と組み合わせて使うこともできます。
const languages = {
  ja: {
      hello: "こんにちは！"
  },
  en: {
      hello: "Hello!"
  }
};
const langJapanese = "ja";
const langKorean = "ko";
const messageKey = "hello";
// Optional chaining演算子（`?.`）とブラケット記法を組みわせた書き方
console.log(languages?.[langJapanese]?.[messageKey]); // => "こんにちは！"
// `languages`に`ko`プロパティが定義されていないため、`undefined`を返す
console.log(languages?.[langKorean]?.[messageKey]); // => undefined


//objectのメソッドの定義
const obj6 = {
  key1: "a",
  key2: "b",
}

// `Object.keys`はキーを列挙した配列を返す
console.log(Object.keys(obj6)); // => ["key1", "key2"]
console.log(Object.values(obj)); // => ["a", "b"]
console.log(Object.entries(obj)); // => [["key1", "a"], ["key2", "b"]]

const keys = Object.keys(obj6);
keys.forEach(key => {
  console.log(`key: ${key}, value: ${obj6[key]}`);  // => "key: key1, value: a", "key: key2, value: b"
}
);




/*
オブジェクトのマージと複製
Object.assignメソッド[ES2015]は、あるオブジェクトを別のオブジェクトに代入（assign）できます。 このメソッドを使うことで、オブジェクトの複製やオブジェクト同士のマージができます。

Object.assignメソッドは、targetオブジェクトに対して、1つ以上のsourcesオブジェクトを指定します。 sourcesオブジェクト自身が持つ列挙可能なプロパティを第一引数のtargetオブジェクトに対してコピーします。 Object.assignメソッドの返り値は、targetオブジェクトになります。

const obj = Object.assign(target, ...sources);
*/


const objectA = { a: "a" };
const objectB = { b: "b" };
const objectC = { c: "c" };
const merged = Object.assign(objectA, objectB,objectC);
console.log(merged); // => { a: "a", b: "b" }
// `objectA`が変更されている
console.log(objectA); // => { a: "a", b: "b" }
console.log(merged === objectA); // => true

//おもろ。assignの返り値はtargetオブジェクトになる。

const objectX = { c: "c" };
const objectD = { d: "d", a: "new a" };

const mergedWithNewValues = {
    ...objectA,
    ...objectX,
    ...objectD,
};

console.log(mergedWithNewValues); // => { a: "new a", c: "c", d: "d" }





// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
  const str =  Object.assign({}, obj);
  console.log(str)
  return str
};
// 引数の`obj`を深く複製したオブジェクトを返す
function deepClone(obj) {
  const newObj = shallowClone(obj);
  // プロパティがオブジェクト型であるなら、再帰的に複製する
  Object.keys(newObj)
      .filter(k => typeof newObj[k] === "object")
      .forEach(k => newObj[k] = deepClone(newObj[k]));
  return newObj;
}
const obj = {
  level: 1,
  nest: {
      level: 2
  }
};
const cloneObj = deepClone(obj);
// `nest`オブジェクトも再帰的に複製されている
console.log(cloneObj.nest === obj.nest); // => false
