// STARTボタンのDOMを取得

const timeArea = document.getElementById('time')//表示する時間

const startButton = document.getElementById('startButton');//開始する
console.log(startButton);

const stopButton = document.getElementById('stopButton');//停止する
console.log(stopButton);

const resetButton = document.getElementById('resetButton');//リセットする
console.log(resetButton);

//開始時間

let startTime;

//停止時間

let stopTime = 0;

// タイムアウトID
let timeoutID;

//スタートボタンの設定

function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(1, '0');
  const m = String(currentTime.getMinutes()).padStart(1, '0');
  const s = String(currentTime.getSeconds()).padStart(1, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  time.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 1);
}

// スタート設定
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

//ストップ
stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

//リセット
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '0:0:0:0';
  stopTime = 0;
});