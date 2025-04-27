import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/Hooks";


const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard 🎉</h1>
        <p className="text-gray-600 mt-2">You're logged in!</p>
      </div>
    </div>
  );
};

export default Dashboard;
