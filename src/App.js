import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import Login from './Pages/Login/Login';
import SignIn from './Pages/Login/SignIn';
import Footer from './Pages/Footer/Footer';
import Wish from './Pages/Wish/Wish';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/wish/:serviceId">
              <Wish/>
            </PrivateRoute>
            <PrivateRoute exact path="/addService">
              <AddService/>
            </PrivateRoute>
            <PrivateRoute exact path="/manageServices">
              <ManageServices/>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
