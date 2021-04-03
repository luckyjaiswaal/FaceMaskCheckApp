import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home} from '../pages/Home'
import { Signin } from '../pages/Signin'
import { Signup } from '../pages/Signup'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'

function App() {
    return (
        <Router>

              <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/SignIn" exact component={() => <Signin />} />
      
              </Switch>

        </Router>
    )
}

export default App
