import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { registerLicense } from '@syncfusion/ej2-base';

const root = ReactDOM.createRoot(document.getElementById('root'));
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJVHxLYVF2R2FJfFRzd19CYEwgOX1dQl9hSXZTdURhXXlbeXVTT2A=');
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
