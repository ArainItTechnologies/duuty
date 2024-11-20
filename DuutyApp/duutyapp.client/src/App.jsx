import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; // Assuming your CSS file is called App.css

// Components
import Login from './Components/Login'; // Import Login component
import Register from './Components/Register'; // Import Register component
import Home from './Components/Home'; // Assuming there's a Home component

const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;
