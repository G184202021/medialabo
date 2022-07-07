let b = document.querySelector('#print');
b.addEventListener('click', greeting);

// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
function greeting() {
	let i = document.querySelector('input[name="kazu"]');
	let suchi = i.value;
    hantei(suchi);
}

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei(suchi) {
    let yoso = Number(suchi);
    kaisu = kaisu + 1;
    let kekka;
    let s = document.querySelector('span#kaisu');
    s.textContent = kaisu;
    let t = document.querySelector('span#suchi');
    t.textContent = yoso;
    if(kaisu===3){
        if (yoso===kotae) {
            kekka = ("正解です。おめでとう！");
        } else {
            kekka = ("まちがい。残念でした答えは" + kotae + "です。")
        }
    }
    if (kaisu>3) {
        kekka = ("答えは" + kotae + "でした。すでにゲームは終わっています")
    }
    if (kaisu<3) {
        if (yoso===kotae) {
            kekka = ("正解です。おめでとう！");
            kaisu = -1;
        } else if(yoso<kotae) {
            kekka = ("まちがい。答えはもっと大きいですよ")
        } else if(yoso>kotae) {
            kekka = ("まちがい。答えはもっと小さいですよ")
        }
    }
    let u = document.querySelector('span#result');
    u.textContent = kekka;
    // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

}