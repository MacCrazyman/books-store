import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Books from './components/books';
import Categories from './components/categories';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
