import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
import User from "./components/User";
import Notfound from "./components/Notfound";
import Users from "./components/Users";
import JobApplication from "./components/JobApplication";
import HireNow from "./components/HireNow";
import FindAJob from "./components/FindAJobs";
import Footer from "./components/Footer";
import SelectRole from "./components/SelectRole";

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
                <Route path="/select-role" element={<SelectRole onClose={() => {}} />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;