import NavBar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>      {/* when use exact, that path only for it. It will not marge   */}
              <Home/>
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/detail/:id'>
              <BlogDetail/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
