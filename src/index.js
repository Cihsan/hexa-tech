import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));


// syncfusion license:-
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJVHxLYVF2R2FJfFRzd19CYEwgOX1dQl9hSXZTdURhXXlbeXVTT2A=');


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
