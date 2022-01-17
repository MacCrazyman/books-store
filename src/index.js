import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Books from './components/books';
import Categories from './components/categories';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
