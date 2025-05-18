import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/user/Login";
import Home from "./components/Home";
import Register from "./components/user/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
import Notfound from "./components/Notfound";
import JobApplication from "./components/JobApplication";
import HireNow from "./components/HireNow";
import FindAJob from "./components/FindAJobs";
import Footer from "./components/Footer";
import EmailConfirmation from "./components/EmailConfirmation";
import ForgotPassword from "./components/user/ForgotPassword";
import Profile from "./components/Profile";
import Pricing from "./components/Pricing";
import ChangePassword from "./components/user/ChangePassword";
import JobListing from "./components/JobListings";
import BecomeEmployer from "./components/BecomeEmployer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job" element={<JobApplication />} />
        <Route path="/find-job" element={<FindAJob />} />
        <Route path="/hire" element={<HireNow />} />
        <Route path="/job-listing" element={<JobListing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/become-employer" element={<BecomeEmployer />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/confirm" element={<EmailConfirmation />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="faq" element={<FrequentlyAskedQuestions />} />
        {/* <Route path="/404" element={<Notfound />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
