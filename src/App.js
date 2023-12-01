import './App.css';
import Index from './components/Index/Index';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Signup from './components/SignUp/Signup';
import Viewallhostels from "./components/ViewAllHostels/Viewallhostels"
import Aboutaryan from "./components/AboutAryan/Aboutaryan"
import Aboutbraetd from "./components/AboutBraetd/Aboutbraetd"
import Aboutdreamworld from "./components/AboutDreamworld/Aboutdreamworld"
import AboutGOD from "./components/AboutGOD/AboutGOD"
import Abouthelican from "./components/AboutHelican/Abouthelican"
import Aboutjb from "./components/AboutJB/Aboutjb"
import Aboutjj from "./components/AboutJJ/Aboutjj"
import Aboutjuliana from "./components/AboutJuliana/Aboutjuliana" 
import Aboutkasamba from "./components/AboutKasamba/Aboutkasamba"
import Aboutmaimood from "./components/AboutMaimood/Aboutmaimood"
import Aboutmish from "./components/AboutMish/Aboutmish"
import Aboutnakiyinji from "./components/AboutNakiyinji/Aboutnakiyinji" 
import Aboutnalikka from "./components/AboutNalikka/Aboutnalikka"
import Aboutnana from "./components/AboutNana/Aboutnana"
import Aboutolympia from "./components/AboutOlympia/Aboutolympia"
import Signin from './components/SignUp/login'
import BookingForm from './components/booking/pay';
 
function App() {
    return (
        <div className="App">
    
                    <Routes>
                    <Route path="/" element={<Index/>} />
                        <Route path="/Signup" element={<Signup/>} />
                        <Route path="/Hostels" element={<Viewallhostels/>}/>
                        <Route path="/Olympia" element={<Aboutolympia/>}/>
						<Route path="/Nana" element={<Aboutnana/>}/>
						<Route path="/Aryan" element={<Aboutaryan/>}/>
						<Route path="/JJ" element={<Aboutjj/>}/>
						<Route path="/Juliana" element={<Aboutjuliana/>}/>
						<Route path="/Nakiyinji" element={<Aboutnakiyinji/>}/>
						<Route path="/Braetd" element={<Aboutbraetd/>}/>
						<Route path="/Kasamba" element={<Aboutkasamba/>}/>
						<Route path="/Helican" element={<Abouthelican/>}/>
						<Route path="/JB" element={<Aboutjb/>}/>
						<Route path="/Maimood" element={<Aboutmaimood/>}/>
						<Route path="/GOD" element={<AboutGOD/>}/>
						<Route path="/Mish" element={<Aboutmish/>}/>
						<Route path="/Nalikka" element={<Aboutnalikka/>}/>
						<Route path="/Dreamworld" element={<Aboutdreamworld/>}/>
                        <Route path="/Signin" element={<Signin/>}/>
						<Route path="/Booking" element={<BookingForm/>}/>
                    </Routes>
            
        </div>
    );
}

export default App;