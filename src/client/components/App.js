import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="welcome">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <h1>Yaz&apos;s MERN Boilerplate</h1>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </div>

        </Router>
    )
}

function Home() {
    return (
        <div>
            <p>This is a MERN Boilerplate project.</p>
        </div>
    )
}

function About() {
    return (
        <div>
            <h2>About</h2>
            <p>This is a MERN Boilerplate project featuring Webpack 4.0.</p>
        </div>
    )
}

export default App;