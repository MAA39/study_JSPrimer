// 正規表現オブジェクトを作成するには、正規表現リテラルとRegExpコンストラクタを使う2つの方法があります。

// 正規表現リテラルで正規表現オブジェクトを作成
const patternA = /パターン/フラグ;
// `RegExp`コンストラクタで正規表現オブジェクトを作成
const patternB = new RegExp("パターン文字列", "フラグ");

//すまんが正規表現は一旦飛ばさせてくれ。いつか調べながらやります。

//https://jsprimer.net/basic/string/#replace-delete
// /文字列の置換/削除

// 検索対象となる文字列
const str = "にわにはにわにわとりがいる";
// 文字列を指定した場合は、最初に一致したものだけが置換される
console.log(str.replace("にわ", "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグなし正規表現の場合は、最初に一致したものだけが置換される
console.log(str.replace(/にわ/, "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグあり正規表現の場合は、繰り返し置換を行う
console.log(str.replace(/にわ/g, "niwa")); // => "niwaにはniwaniwaとりがいる"

// 検索対象となる文字列
const str1 = "aaa_aa_a";
// `a`を`x`に置換する
console.log(str1.replace("a", "x")); // => "xaa_aa_a"
// `g`フラグなし正規表現の場合は、最初に一致したものだけが置換される
console.log(str1.replace(/a/, "x")); // => "xaa_aa_a"
// `g`フラグあり正規表現の場合は、繰り返し置換を行う
console.log(str1.replace(/a/g, "x")); // => "xxx_xx_x"

//replaceall
// 検索対象となる文字列
const str2 = "aaa_aa_a";
// `a`を`x`に置換する
console.log(str2.replaceAll("a", "x")); // => "xxx_xx_x"
// `g`フラグなし正規表現の場合は、最初に一致したものだけが置換される
console.log(str2.replaceAll(/a/, "x")); // => "xxx_xx_x"
// `g`フラグあり正規表現の場合は、繰り返し置換を行う
console.log(str2.replaceAll(/a/g, "x")); // => "xxx_xx_x"

// replaceメソッドとreplaceAllメソッドの第二引数にはコールバック関数を渡せます。 第一引数のパターンにマッチした部分がコールバック関数の返り値で置換されます。 コールバック関数の第一引数にはパターンに一致した文字列全体、第二引数以降へキャプチャした文字列が順番に入ります。

// const 置換した結果の文字列 = 文字列.replace(/(パターン)/, (all, ...captures) => {
//     return 置換したい文字列;
// });
// 例として、2017-03-01を2017年03月01日に置換する処理を書いてみましょう。

// /(\d{4})-(\d{2})-(\d{2})/gという正規表現が"2017-03-01"という文字列にマッチします。 コールバック関数のyear、month、dayにはそれぞれキャプチャした文字列が入り、 マッチした文字列全体がコールバック関数の返り値に置換されます。

function toDateJa(dateString) {
    // パターンにマッチしたときのみ、コールバック関数で置換処理が行われる
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
        // `all`には、マッチした文字列全体が入っているが今回は利用しない
        // `all`が次の返す値で置換されるイメージ
        return `${year}年${month}月${day}日`;
    });
}
// マッチしない文字列の場合は、そのままの文字列が返る
console.log(toDateJa("本日ハ晴天ナリ")); // => "本日ハ晴天ナリ"
// マッチした場合は置換した結果を返す
console.log(toDateJa("今日は2017-03-01です")); // => "今日は2017年03月01日です"

//時間も追加
function toDateJa1(dateString) {
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/g, (all, year, month, day, hour, minute) => {
        return `${year}年${month}月${day}日${hour}時${minute}分`;
    }
    );
}
console.log(toDateJa1("今日は2017-03-01-12-30です")); // => "今日は2017年03月01日12時30分です"

//MEMO：これはどこかで使うことになると思います

// ベースURLとパスを結合した文字列を返す
// function baseJoin(baseURL, pathname) {
//     // 末尾に / がある場合は、/ を削除してから結合する
//     const stripSlashBaseURL = baseURL.replace(/\/$/, "");
//     return stripSlashBaseURL + pathname;
// }
// // `baseURL`と`pathname`にあるリソースを取得する
// function getResource(baseURL, pathname) {
//     const url = baseJoin(baseURL, pathname);
//     // baseURLの末尾に / があってもなくても同じ結果となる
//     console.log(url); // => "http://example.com/resouces/example.js"
//     // 省略) リソースを取得する処理...
// }
// const baseURL = "http://example.com/resouces/";
// const pathname = "/example.js";
// getResource(baseURL, pathname);

// ベースURLとパスを結合した文字列を返す
function baseJoin(baseURL, pathname) {
    // 末尾に / がある場合は、/ を削除してから結合する
    const stripSlashBaseURL = baseURL.replace(/\/$/, "");
    return stripSlashBaseURL + pathname;
}
// `baseURL`と`pathname`にあるリソースを取得する
function getResource(baseURL, pathname) {
    const url = baseJoin(baseURL, pathname);
    // baseURLの末尾に / があってもなくても同じ結果となる
    console.log(url); // => "http://example.com/resouces/example.js"
    // 省略) リソースを取得する処理...
}
const baseURL = "http://example.com/resouces/";
const pathname = "/example.js";
getResource(baseURL, pathname);

// baseJoin関数

// 引数
// baseURL: ベースとなるURL（例: "http://example.com/resources/"）
// pathname: パス（例: "/example.js"）
// 動作
// ベースURLの末尾のスラッシュ（あれば）を削除します。これは正規表現/\/$/を使ってreplaceメソッドで行います。
// 修正されたベースURLとパスを結合して新しいURLを作成します。
// 戻り値
// 新しいURLを返します。
// getResource関数

// 引数
// baseURL: ベースとなるURL
// pathname: パス
// 動作
// baseJoin関数を呼び出して新しいURLを作成します。
// 新しいURLをコンソールに出力します（実際のリソース取得処理は省略されています）。
// 変数の定義と関数の呼び出し

// baseURLとpathname変数を定義します。
// getResource関数を呼び出してURLを生成し、コンソールに出力します。
// このコードが実行されると、以下のURLがコンソールに出力されます：

// plaintext
// Copy code
// http://example.com/resouces/example.js

//ECMAScriptの範囲ではありませんが、URLやファイルパスといった典型的なものに対してはすでに専用のものがあります。 URLを扱うものとしてウェブ標準APIであるURLオブジェクト、
//ファイルパスを扱うものとしてはNode.jsのコアモジュールであるPathモジュールなどがあります。専用の仕組みがある場合は、直接+演算子で結合するような文字列処理は避けるべきです。

// [ES2015] タグつきテンプレート関数


// タグつきテンプレート関数を利用することで、テンプレートとなる文字列に対して特定の形式に変換したデータを埋め込むといったテンプレート処理が行えます。

// 次のコードでは、テンプレート中の変数をURLエスケープしてから埋め込むタグつきテンプレート関数を定義しています。 encodeURIComponent関数は引数の値をURLエスケープする関数です。 escapeURLでは受け取った変数をencodeURIComponent関数でURLエスケープしてから埋め込んでいます。

// 変数をURLエスケープするタグ関数
function escapeURL(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + encodeURIComponent(values[i - 1]) + str;
    });
}

const input = "A&B";
// escapeURLタグ関数を使ったタグつきテンプレート
const escapedURL = escapeURL`https://example.com/search?q=${input}&sort=desc`;
console.log(escapedURL); // => "https://example.com/search?q=A%26B&sort=desc"
// 実行
// このようにタグつきテンプレートリテラルを使うことで、コンテキストに応じた処理をつけ加えることができます。 この機能はJavaScript内にHTMLなどの別の言語やDSL（ドメイン固有言語）を埋め込む際に利用されることが多いです。