/*
let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);
function printAnswer() {
  let cs = document.querySelectorAll('input[name="hobby"]');
  for (let c of cs) {
    if (c.checked) {

let a = document.querySelector('#answer');
a.addEventListener('click', answer);
function answer() {
*/
let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);

let a = null
// 2. イベントハンドラの定義

function printAnswer() {
  /*
  // name 属性が hobby の input 要素をすべて検索
  let cs = document.querySelectorAll('input[name="what"]');
  for (let c of cs) {
      if (c.checked) {
          console.log(c.value);
          i= c.id
      }
  }*/
    // name 属性が year の input 要素をすべて検索
    let rs = document.querySelectorAll('input[name="area"]');
    for (let r of rs) {
        if (r.checked) {        // r が選択されていたら
            console.log(r.value);
            tusin(r.id)
        }
    }
    
}
b.addEventListener('click', answer);
/*
let a = document.querySelector('#answer');
a.addEventListener('click', answer);
*/
function tusin(id) {
  //let id = id
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id+'.json';

  // 通信開始
	axios.get(url)
      .then(showResult)
      .catch(showError)
      //.then(finish);
}
// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;
  
	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
  }
  let kekka = data.name + "..."
  let cs = document.querySelectorAll('input[name="what"]');
  for (let c of cs) {
      if (c.checked) {
        if(c.value == "天気") kekka = kekka +" , "+ c.value +" : " + data.weather.descriptiion
        if(c.value == "最低気温") kekka = kekka +" , "+ c.value +" : " + data.main.temp_min + "℃ "
        if(c.value == "最高気温") kekka = kekka +" , "+ c.value +" : " + data.main.temp_max + "℃ "
        if(c.value == "湿度") kekka = kekka+" , " + c.value +" : " + data.main.humidity+ "% "
        if(c.value == "風速") kekka = kekka+" , " + c.value +" : " + data.wind.speed + "m/s "
      }
      
  }
  kekka = kekka + "です。"
  //let kekka = data.name+ "の" +"最高気温は"+data.main.temp_max+"℃, " + "最低気温は"+data.main.temp_min+"℃"
  let s = document.querySelector('span#result');
  s.textContent = kekka;
  
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

/*
let a = document.querySelector('#answer');
a.addEventListener('click', answer);

function answer() {
  let id = '2147714'
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id+'.json';

  // 通信開始
	axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
}
// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
/*let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let kekka = data.name+ "の" +"最高気温は"+data.main.temp_max+"℃, " + "最低気温は"+data.main.temp_min+"℃"
let s = document.querySelector('span#kekka');
s.textContent = kekka;
//console.log(data.name+"、"+data.main.temp_max+" 、"+data.main.temp_min)
//console.log("最高気温は"+data.main.temp_max+"℃")
//console.log("最低気温は"+data.main.temp_min+"℃")
/*for (let b of data.name) {
	console.log(b);
}
*/