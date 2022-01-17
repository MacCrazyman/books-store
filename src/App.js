import './App.css';
import {
  Link, Outlet,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Bookstore CMS</h1>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
