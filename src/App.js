import React, {useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Rooms from './components/Rooms/Rooms';

export const UserContext = createContext();

function App() {

const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
   <Router>
   
      <NavBar/>
 
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route path="/login">
      <Login></Login>
       </Route>
       <PrivateRoute path="/rooms">
         <Rooms/>
       </PrivateRoute>
       <Route path="/:bookingId">
         <Booking/>
       </Route>
       
       <Route exact path="/">
       <Home></Home>
       </Route>
       <Route path="*">
         <NoMatch></NoMatch>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
