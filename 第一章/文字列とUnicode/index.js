// Code Pointが`12354`の文字を取得する
console.log(String.fromCodePoint(12354)); // => "あ"
// `12354`を16進数リテラルで表記しても同じ結果
console.log(String.fromCodePoint(0x3042)); // => "あ"

//また、文字列リテラル中にはUnicodeエスケープシーケンスで、直接Code Pointを書くこともできます。 Code Pointは\u{Code Pointの16進数の値}のようにエスケープシーケンスとして記述できます。 Unicodeエスケープシーケンスでは、Code Pointの16進数の値が必要となります。 NumberのtoStringメソッドの引数に基数となる16を渡すことで、16進数の文字列を取得できます。

// "あ"のCode Pointは12354
const codePointOfあ = "あ".codePointAt(0);
// 12354の16進数表現は"3042"
const hexOfあ = codePointOfあ.toString(16);
console.log(hexOfあ);// => "3042"
// Unicodeエスケープで"あ"を表現できる
console.log("\u{3042}"); // => "あ"

// Code Unit（上位サロゲート + 下位サロゲート）
console.log("\uD83C\uDF4E"); // => "🍎"
// Code Point
console.log("\u{1F34E}"); // => "🍎"

// 上位サロゲート + 下位サロゲートの組み合わせ
console.log("\uD867\uDE3D"); // => "𩸽"
// Code Pointでの表現
console.log("\u{29e3d}"); // => "𩸽"

//Unicodeは後回しにさせてくれ・・・