import './App.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import LoginHeader from './Components/LoginHeader'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader/>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
