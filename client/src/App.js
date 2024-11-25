import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import './Styles/navbar.css';
import './Styles/footer.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ParkingSpace from './Component/ParkingSpace';
import Profile from './Component/Profile';
import Home from './Component/Home';
import Booking from './Component/Booking';
import Wallet from './Component/Wallet';

// import './Styles/navbar.css';
// import './Styles/footer.css';
import './Styles/profile.css';

import './Styles/parkingSpace.css';
import './Styles/home.css';
import './Styles/booking.css';
import './Styles/wallet.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Change Switch to Routes */}
        <Route path="/" element={<Home />} /> {/* Add Home route */}
          <Route path="/parking-Space" element={<ParkingSpace />} /> {/* Use element prop instead of component */}
          <Route path="/profile" element={<Profile />} /> {/* Use element prop instead of component */}
          <Route path="/booking" element={<Booking />} /> {/* Booking route */}
          <Route path="/wallet" element={<Wallet />} /> {/* Wallet route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;