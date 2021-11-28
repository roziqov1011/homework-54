import './App.scss';
import { Route, Switch } from 'react-router';
import Header from './components/Header/Header';
import Channel from './pages/Channel/Channel';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';

function App() {
  return (
    <>
    <Header></Header>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/channel" component={Channel}></Route>
      <Route path="/video" component={Video}></Route>
    </Switch>
   </>
  );
}

export default App;
