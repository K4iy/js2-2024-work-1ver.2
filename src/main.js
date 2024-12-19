// style.cssのインポート
import './style.css';

// HTMLをJSに含める（テンプレートリテラルを使用）
document.querySelector('#app').innerHTML = `
  <h1>VALORANTの180度振り向き計算ツール</h1>

  <form id="calculator-form">
    <label for="dpi">DPIを入力してください</label>
    <input type="number" id="dpi" placeholder="例: 800" required />

    <label for="sensitivity">ゲーム内感度 (Sensitivity) を入力してください</label>
    <input type="number" id="sensitivity" placeholder="例: 0.5" step="0.01" required />
  </form>

  <h2>結果</h2>
  <p id="result">ここに結果が表示されます。</p>
`;

// 振り向き計算のロジック
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calculator-form');
  const result = document.getElementById('result');
  const dpiInput = document.getElementById('dpi');
  const sensitivityInput = document.getElementById('sensitivity');

  function updateResult() {
    const dpi = parseFloat(dpiInput.value);
    const sensitivity = parseFloat(sensitivityInput.value);

    if (!dpi || !sensitivity || dpi <= 0 || sensitivity <= 0) {
      result.textContent = 'DPIと感度を正しく入力してください。';
      return;
    }

    const cmPer180 = calculateTurnDistance(dpi, sensitivity);
    result.textContent = `180度振り向きに必要な距離: ${cmPer180.toFixed(2)} cm`;
  }

  dpiInput.addEventListener('input', updateResult);
  sensitivityInput.addEventListener('input', updateResult);

  function calculateTurnDistance(dpi, sensitivity) {
    const conversionFactor = 0.02756; // VALORANTの変換係数
    const distanceCm = 180 / (dpi * sensitivity * conversionFactor);
    return distanceCm;
  }
});


// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
