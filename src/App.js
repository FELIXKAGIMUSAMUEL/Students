import './App.css';
import Index from './components/Index/Index';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Signup from './components/SignUp/Signup';


function App() {
    return (
        <div className="App">
           <Index />
            <Router>
                <div>
                    <Routes>
                        <Route path="/Signup" element={<Signup/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;