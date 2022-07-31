import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import Home from './Home.js'
import Contact from './Contact'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import AboutMe from './AboutMe'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Link exact path='/' component={Home} />
        <Link exact path='/Login' component={Contact} />
        <Link exact path='/About' component={AboutMe} />
        <Link exact path='/Contact' component={Contact} />
      </Switch>
    </Router>
  )
}

export default App
