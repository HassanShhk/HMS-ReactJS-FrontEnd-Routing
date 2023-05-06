
import './App.css';
import Home from './Components/Home';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes  } from 'react-router-dom';
import AccomodationPage from './Components/Rooms/AccomodationPage';
import LuxuryRoom from './Components/Rooms/LuxuryRoom';
import DeluxeRoom from './Components/Rooms/DeluxeRoom';
import StandardRoom from './Components/Rooms/StandardRoom';
import Rewards from './Components/Rooms/Rewards';
import BookingPage from './Components/BookingPage';
import ContactPage from './Components/ContactPage';
import FeedbackForm from './Components/FeedbackForm'
import Blog from './Components/Blog'
import POOL1 from './Components/POOL1'
import Gym from './Components/single'
import AdminHome from './Components/Admin/AdminHome'
function App() {
  return (
    <>


<BrowserRouter>

<Routes>

<Route path="/" element={<AdminHome/>} />
<Route path="/accomodation" element={<AccomodationPage/>} />
<Route path="/luxuryRoom" element={<LuxuryRoom/>} />
<Route path="/deluxeRoom" element={<DeluxeRoom/>} />
<Route path="/standardRoom" element={<StandardRoom/>} />
<Route path="/rewards" element={<Rewards/>} />
<Route path="/BookingPage" element={<BookingPage/>} />
<Route path="/contactUs" element={<ContactPage/>} />
<Route path="/feedback" element={<FeedbackForm/>} />
<Route path="/blog" element={<Blog/>} />
<Route path="/pool" element={<POOL1/>} />
<Route path="/gym" element={<Gym/>} />

</Routes>

</BrowserRouter>

    </>
  );
}

export default App;
