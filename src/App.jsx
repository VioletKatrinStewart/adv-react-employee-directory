import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
