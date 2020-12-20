import './App.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import LoginHeader from './Components/LoginHeader'
import Login from './Components/Login'
import Register from './Components/Register'
import Main from './Components/Main'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader/>
            <Login />
          </Route>
          <Route path="/register">
            <LoginHeader/>
            <Register/>
          </Route>
          <Route path="/">
              <LoginHeader/>
              <Main />
              </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
