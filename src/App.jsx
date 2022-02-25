import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './views/Profile/Profile';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ConfirmEmail from './views/ConfirmEmail/ConfirmEmail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/register">
            <Auth isSigningUp={true} />
          </Route>
          <Route path="/confirm-email">
            <ConfirmEmail />
          </Route>
          <Route path="/login">
            <Auth />
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
