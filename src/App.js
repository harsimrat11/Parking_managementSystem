import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Login from './Components/Login';
import ParkingSpace from './Components/ParkingSpace';


function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />
      <SignUp/>
      <Login/>
      <ParkingSpace/>
      <Footer/>
    

    
   
    </div>
  );
}

export default App;
