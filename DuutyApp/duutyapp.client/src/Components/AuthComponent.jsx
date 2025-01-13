import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { userLogin, userRegister } from "../api/auth";
import { getRoleFromToken } from "../utils/jwtUtils";
import { AuthContext } from "../contexts/AuthContext";


const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const role = getRoleFromToken(token);
      switch (role) {
        case "Admin":
          navigate("/admin-dashboard");
          break;
        case "SuperAdmin":
          navigate("/super-admin-dashboard");
          break;
        case "User":
          navigate("/user-dashboard");
          break;
        case "Guest":
          navigate("/guest");
          break;
        default:
          navigate("/login");
          break;
      }
    }
  }, [navigate]);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  const loginValidationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const registerValidationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const response = await userLogin(values);
      var authToken = response.token;
      if (authToken !== null) {
        login(authToken);
        const role = getRoleFromToken(authToken);
        switch (role) {
          case "Admin":
            navigate("/admin-dashboard");
            break;
          case "SuperAdmin":
            navigate("/super-admin-dashboard");
            break;
          case "User":
            navigate("/user-dashboard");
            break;
          case "Guest":
            navigate("/guest");
            break;
          default:
            navigate("/login");
            break;
        }
      } else {
        navigate("/login");
      }
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      const response = await userRegister(values);
      if (response.success) {
        navigate("/login");
      } else {
        alert(response.message);
      }
    },
  });

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
      <form onSubmit={isLogin ? loginFormik.handleSubmit : registerFormik.handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name<span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={registerFormik.values.name}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              className={registerFormik.touched.name && registerFormik.errors.name ? "error" : ""}
            />
            {registerFormik.touched.name && registerFormik.errors.name && (
              <div className="error-message">{registerFormik.errors.name}</div>
            )}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={isLogin ? loginFormik.values.email : registerFormik.values.email}
            onChange={isLogin ? loginFormik.handleChange : registerFormik.handleChange}
            onBlur={isLogin ? loginFormik.handleBlur : registerFormik.handleBlur}
            className={(isLogin ? loginFormik.touched.email && loginFormik.errors.email : registerFormik.touched.email && registerFormik.errors.email) ? "error" : ""}
          />
          {(isLogin ? loginFormik.touched.email && loginFormik.errors.email : registerFormik.touched.email && registerFormik.errors.email) && (
            <div className="error-message">{isLogin ? loginFormik.errors.email : registerFormik.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<span className="required">*</span></label>
          <input
            type="password"
            id="password"
            name="password"
            value={isLogin ? loginFormik.values.password : registerFormik.values.password}
            onChange={isLogin ? loginFormik.handleChange : registerFormik.handleChange}
            onBlur={isLogin ? loginFormik.handleBlur : registerFormik.handleBlur}
            className={(isLogin ? loginFormik.touched.password && loginFormik.errors.password : registerFormik.touched.password && registerFormik.errors.password) ? "error" : ""}
          />
          {(isLogin ? loginFormik.touched.password && loginFormik.errors.password : registerFormik.touched.password && registerFormik.errors.password) && (
            <div className="error-message">{isLogin ? loginFormik.errors.password : registerFormik.errors.password}</div>
          )}
        </div>
        {isLogin && (
          <div className="form-group">
            <NavLink to="/forgot-password" className="forgot-password-link">Forgot Password?</NavLink>
          </div>
        )}
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password<span className="required">*</span></label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={registerFormik.values.confirmPassword}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              className={registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword ? "error" : ""}
            />
            {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword && (
              <div className="error-message">{registerFormik.errors.confirmPassword}</div>
            )}
          </div>
        )}
        <button type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>
      </form>
      <button onClick={switchForm} className="switch-form-link">
        {isLogin ? "Not a member? Register" : "Already a member? Sign In"}
      </button>
    </div>
  );
};

export default AuthComponent;