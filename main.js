// STARTボタンのDOMを取得

const timeArea = document.getElementById('time')//表示する時間

const startButton = document.getElementById('startButton');//開始する
console.log(startButton);

const stopButton = document.getElementById('stopButton');//停止する
console.log(stopButton);

const resetButton = document.getElementById('resetButton');//リセットする
console.log(resetButton);

//開始時間

let startTime = 0;
let running = false;
let timerInterval = undefined;
let currentTime = "";
let calcTime = 0;

//スタートボタンの設定

const displayTimer = () => {
  timerInterval = window.setInterval(() => {

    // 現在の時間からスタートした時間をマイナスする
    calcTime = Date.now() - startTime;

    // タイムスタンプを時間に変換します
    const currentTime = new Date(calcTime);
    const h = String(currentTime.getHours() - 9).padStart(2, "0");
    const m = String(currentTime.getMinutes()).padStart(2, "0");
    const s = String(currentTime.getSeconds()).padStart(2, "0");
    // const ms = String(currentTime.getMilliseconds()).padStart(3, "0");

    // time.textContent = `${h}:${m}:${s}:${ms}`;
    time.textContent = `${h}:${m}:${s}`;
    //　ミリ秒表示の場合、10
    // 秒表示の場合 1000
  }, 1000);
}

// スタートボタンクリック（イベント）
onClickStart.addEventListener('click', function(){
  startTime = Date.now()　- calcTime;
  displayTimer();
 // ボタンの状態
  onClickStart.disabled = true;
  onClickStop.disabled = false;
  onClickReset.disabled = false;
})

// ストップボタンクリック（イベント）
onClickStop.addEventListener('click', function(){
  window.clearInterval(timerInterval);
 // ボタンの状態
  onClickStart.disabled = false;
  onClickStop.disabled = true;
  onClickReset.disabled = false;
})

// リセットボタンクリック（イベント）
onClickReset.addEventListener('click', function(){
calcTime = 0;
time.textContent = "00:00:00";
onClickStart.disabled = false;
window.clearInterval(timerInterval);
// ボタンの状態
onClickStart.disabled = false;
onClickStop.disabled = true;
onClickReset.disabled = true;
})