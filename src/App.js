import { Route, Switch } from 'react-router';
import './App.css';
import Team from './pages/Teams/Team';
import MatchPage from './pages/Match/MatchPage';
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/teams/:teamName' render={(props) => <Team {...props}/>}/>
      <Route exact path='/teams/:teamName/matches/:year' render={(props) => <MatchPage {...props}/>} />
    </Switch>
  );
}

export default App;
