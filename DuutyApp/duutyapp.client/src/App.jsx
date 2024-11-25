import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
