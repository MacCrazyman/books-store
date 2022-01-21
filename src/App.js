import './App.css';
import {
  Link, Outlet,
} from 'react-router-dom';
import loginIcon from './img/loginIcon.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <h1>Bookstore CMS</h1>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
          <div className="login-icon">
            <img src={loginIcon} alt="login icon" />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
      </footer>
    </div>
  );
}

export default App;
