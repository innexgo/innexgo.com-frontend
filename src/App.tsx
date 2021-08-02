import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import TermsOfService from './pages/TermsOfService';
import Error from './pages/Error';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/terms_of_service" component={TermsOfService} />
        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
