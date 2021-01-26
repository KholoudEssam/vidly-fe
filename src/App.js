// import HomeCounter from './components/counter/HomeCounter';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import MovieForm from './components/MovieForm';
import Customers from './components/Customers';
import NotFound from './components/NotFound';
import Rentals from './components/Rentals';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/movies' component={Movies}></Route>
                    <Route path={`/movie/new`} component={MovieForm}></Route>
                    <Route path={`/movie/:id`} component={MovieForm}></Route>
                    <Route path='/customers' component={Customers}></Route>
                    <Route path='/rentals' component={Rentals}></Route>
                    <Route path='/not-found' component={NotFound}></Route>
                    <Redirect exact from='/' to='/movies' />
                    <Redirect to='/not-found' />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
