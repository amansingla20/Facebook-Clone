import './App.css';
import Login from './Login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Facebook_Dashboard from './Facebook_Dashboard';
function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/dashboard' component={Facebook_Dashboard}/>
        </Switch>
      </div>
    </Router>
)
}

export default App;
