import './App.css';
import Index from './components/Index/Index';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Signup from './components/SignUp/Signup';
import Viewallhostels from "./components/ViewAllHostels/Viewallhostels"
import Abouthostels from "./components/AboutHostels/Abouthostels"
import Signin from './components/SignUp/login';

function App() {
    return (
        <div className="App">
           {/* <Index /> */}
                
                    <Routes>
                    <Route path="/" element={<Index/>} />
                        <Route path="/Signup" element={<Signup/>} />
                        <Route path="/details" element={<Viewallhostels/>}/>
                        <Route path="/display" element={<Abouthostels/>}/>
                        <Route path="/Signin" element={<Signin/>}/>
                    </Routes>
            
        </div>
    );
}

export default App;