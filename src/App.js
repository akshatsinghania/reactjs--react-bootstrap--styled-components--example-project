import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { About } from './About'
import { Layout } from './Components/Layout'
import { NavigationBar } from './Components/NavigationBar'
import { Jumbotron } from './Components/Jumbotron'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/' component={Home} />
            <Route exact component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  )
}

export default App
