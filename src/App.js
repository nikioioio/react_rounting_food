import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe'

function App() {
    return (
        <>
            <Router>
            <Header/>
            <main className="container content">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/category/:name/:idMeal" component={Recipe}/>
                    <Route path="/category/:name" component={Category}/>

                    <Route component={NotFound}/>
                </Switch>
            </main>
            <Footer/>
        </Router>
        </>
    );
}


export default App;
