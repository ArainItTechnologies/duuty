import { Link } from "react-router-dom";

const Notfound = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      {/* Image */}
      {/* <img 
        src="https://i.imgur.com/N4bT0fO.png" 
        alt="Food Spill" 
        className="w-80 md:w-96 object-contain"
      /> */}

      {/* Text */}
      <h1 className="text-4xl font-bold text-primary mt-6">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2">Looks like you made a mess. Let’s clean it up!</p>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-primary text-white text-lg rounded-lg shadow-lg hover:bg-purple-700 transition"
      >
        Go To Kitchen
      </Link>
    </div>
  );
}

export default Notfound;
