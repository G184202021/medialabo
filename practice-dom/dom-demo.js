let ul = document.querySelector('ul');      // ul 要素を検索
let li;                                     // 変数 li を宣言
li = document.createElement('li');          // li 要素を作成
li.textContent = 'アジア大陸';                // li 要素のテキストを設定
ul.insertAdjacentElement('beforeend', li);  // ul の最後に li を追加
li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);

let h2sevenOcean = document.querySelector('h2#sevenOcean')

let oceans = [
    '北極海',
    '北大西洋',
    '南大西洋',
    'インド洋',
    '北太平洋',
    '南太平洋',
    '南極海'
 ]

ul = document.createElement('ul')
h2sevenOcean.insertAdjacentElement('afterend', ul)
for (let o of oceans) {
    li = document.createElement('li')
    li.textContent = o;
    ul.insertAdjacentElement('beforeend', li)
 }

let h1 = document.querySelector('h1');
h1.style.color = 'blue';
h1.style.fontSize = '10pt';

let h2s = document.querySelectorAll('h2')
for (let h2 of h2s) {
    h2.style.backgroundColor = 'palegreen'
  }