//エレメント作成
var element = document.createElement('div');
//エレメントの中身を作成
element.innerHTML = 'Hello World';
//エレメントを追加
document.body.appendChild(element);
//エレメントのスタイルを設定
element.style.backgroundColor = '#000000';
element.style.height = '100px';
element.style.width = '100px';
element.style.position = 'absolute';
element.style.top = '100px';
element.style.left = '100px';
//エレメントのイベントを設定
element.addEventListener('click', function() {
    alert('Hello World');
    }
);
