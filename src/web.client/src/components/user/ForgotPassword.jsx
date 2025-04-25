import { useState } from "react";
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/logo.png";
import { resetPassword } from "../../services/auth";
import Toast from "../custom/Toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [success, setSuccess] = useState(true);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setToastMessage("Reset link sent to your email!");
      setSuccess(true);
    } catch {
      setToastMessage("Failed to send reset link.");
      setSuccess(false);
    } finally {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={LogoSrc}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email and we'll send you a reset link.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleReset} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Reset Link
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Remembered your password?{" "}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Back to login
            </Link>
          </p>
        </div>
      </div>

      {showToast && <Toast message={toastMessage} success={success} />}
    </>
  );
};

export default ForgotPassword;