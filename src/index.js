import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Aboutus from './views/aboutus'
import Contactus from './views/contactus'
import Customer from './views/customer'
import Homepage from './views/homepage'
import Legal from './views/legal'
import Quality from './views/quality'
import Sectors from './views/sectors'
import Services from './views/services'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Aboutus} path="/aboutus" />
        <Route exact component={Contactus} path="/contactus" />
        <Route exact component={Customer} path="/customer" />
        <Route exact component={Homepage} path="/" />
        <Route exact component={Legal} path="/legal" />
        <Route exact component={Quality} path="/quality" />
        <Route exact component={Sectors} path="/sectors" />
        <Route exact component={Services} path="/services" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
