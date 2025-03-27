import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Navbar from "./components/Navbar";
import Edit from "./Components/Edit";
import User from "./Components/User";
import Notfound from "./Components/Notfound";
import Users from "./Components/Users";
import JobApplication from "./Components/JobApplication";
import HireNow from "./Components/HireNow";
import FindAJob from "./Components/FindAJobs";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/job" element={<JobApplication />} />
                <Route path="/find-job" element={<FindAJob />} />
                <Route path="/hire" element={<HireNow />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Dashboard />} />
                <Route path="/profile/edit" element={<Edit />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:username" element={<User />} />
                {/* <Route path="/404" element={<Notfound />} /> */}
                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;