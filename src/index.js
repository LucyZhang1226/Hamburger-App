import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



//设置移动端的适配
//750表示视口的宽度

document.documentElement.style.fontSize = 100/750 + "vw";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

