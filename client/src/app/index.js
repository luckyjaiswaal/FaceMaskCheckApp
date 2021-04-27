import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FooterPage from '../components/Footer'
import NavBar from '../components/NavBar'
import { Home} from '../pages/Home'
import Signin  from '../pages/Signin'
import Signup  from '../pages/Signup'
import AdminDashboard from '../pages/AdminDashboard'
import VenueDashboard from '../pages/VenueDashboard'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'

function App() {
    return (
        <Router>
          <NavBar/>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/SignIn" exact component={Signin} />
                <Route path= "/AdminDashboard" exact component={AdminDashboard} />
                <Route path= "/VenueDashboard" exact component={VenueDashboard} />
              </Switch>
          <FooterPage/>
        </Router>
    )
}

export default App
