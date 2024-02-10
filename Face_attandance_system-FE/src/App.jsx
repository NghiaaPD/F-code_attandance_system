import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sign_In from '@/page/Sign_In.jsx';
import Adminpage from '@/page/Adminpage.jsx';
import Userpage from '@/page/Userpage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sign_In />} />
                <Route path="/Admin" element={<Adminpage />} />
                <Route path="/User" element={<Userpage />} />
            </Routes>
        </Router>
    );
}

export default App;
