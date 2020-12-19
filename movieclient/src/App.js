import './App.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import LoginHeader from './Components/LoginHeader'
import Login from './Components/Login'
import Register from './Components/Register'

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
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
