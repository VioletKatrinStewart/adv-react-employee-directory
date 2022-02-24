import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './views/Auth/LogIn';
import Register from './views/Auth/Register';
import Profile from './views/Profile/Profile';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
