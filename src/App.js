import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import All from './Pages/All';
import NavBars from './Pages/NavBars'
import Science from './Pages/Science';

function App() {
  return (
   <>
   <Router>
     <NavBars />

     <Switch>
     <Route exact path="/" component={All} />
     <Route exact path="/Science" component={Science} />

     </Switch>
   </Router>
   </>
  );
}

export default App;
