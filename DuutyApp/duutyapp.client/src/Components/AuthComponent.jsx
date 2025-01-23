import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { userLogin, userRegister } from "../api/auth";
import { getRoleFromToken } from "../utils/jwtUtils";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, NavbarToggler } from "reactstrap";

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState("");

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

  useEffect(() => {
    document.body.classList.add("auth-background");
    return () => {
      document.body.classList.remove("auth-background");
    };
  }, []);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  const loginValidationSchema = yup.object({
    mobile: yup
      .string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    password: yup.string().required("Password is required"),
  });

  const registerValidationSchema = yup.object({
    name: yup.string().required("Name is required"),
    mobile: yup
      .string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
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
      mobile: "",
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
            navigate("/auth");
            break;
        }
      } else {
        navigate("/auth");
      }
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      const response = await userRegister(values);
      if (response.success) {
        setIsOtpModalOpen(true);
      } else {
        alert(response.message);
      }
    },
  });

  const handleOtpSubmit = () => {
    // Handle OTP submission logic here
    setIsOtpModalOpen(false);
    navigate("/auth");
  };

  const isFormValid = isLogin
    ? loginFormik.isValid && loginFormik.dirty
    : registerFormik.isValid && registerFormik.dirty && registerFormik.values.password === registerFormik.values.confirmPassword;

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
      <form
        onSubmit={
          isLogin ? loginFormik.handleSubmit : registerFormik.handleSubmit
        }
      >
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">
              Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={registerFormik.values.name}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              className={
                registerFormik.touched.name && registerFormik.errors.name
                  ? "error"
                  : ""
              }
            />
            {registerFormik.touched.name && registerFormik.errors.name && (
              <div className="error-message">{registerFormik.errors.name}</div>
            )}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="mobile">Mobile <span className="required">*</span></label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={isLogin ? loginFormik.values.mobile : registerFormik.values.mobile}
            onChange={isLogin ? loginFormik.handleChange : registerFormik.handleChange}
            onBlur={isLogin ? loginFormik.handleBlur : registerFormik.handleBlur}
            className={(isLogin ? loginFormik.touched.mobile && loginFormik.errors.mobile : registerFormik.touched.mobile && registerFormik.errors.mobile) ? "error" : ""}
          />
          {(isLogin ? loginFormik.touched.mobile && loginFormik.errors.mobile : registerFormik.touched.mobile && registerFormik.errors.mobile) && (
            <div className="error-message">{isLogin ? loginFormik.errors.mobile : registerFormik.errors.mobile}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password<span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={
              isLogin
                ? loginFormik.values.password
                : registerFormik.values.password
            }
            onChange={
              isLogin ? loginFormik.handleChange : registerFormik.handleChange
            }
            onBlur={
              isLogin ? loginFormik.handleBlur : registerFormik.handleBlur
            }
            className={
              (
                isLogin
                  ? loginFormik.touched.password && loginFormik.errors.password
                  : registerFormik.touched.password &&
                    registerFormik.errors.password
              )
                ? "error"
                : ""
            }
          />
          {(isLogin
            ? loginFormik.touched.password && loginFormik.errors.password
            : registerFormik.touched.password &&
              registerFormik.errors.password) && (
            <div className="error-message">
              {isLogin
                ? loginFormik.errors.password
                : registerFormik.errors.password}
            </div>
          )}
        </div>
        {isLogin && (
          <div className="form-group">
            <NavLink to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </NavLink>
          </div>
        )}
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password<span className="required">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={registerFormik.values.confirmPassword}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
              className={
                registerFormik.touched.confirmPassword &&
                registerFormik.errors.confirmPassword
                  ? "error"
                  : ""
              }
            />
            {registerFormik.touched.confirmPassword &&
              registerFormik.errors.confirmPassword && (
                <div className="error-message">
                  {registerFormik.errors.confirmPassword}
                </div>
              )}
          </div>
        )}
        <Button color="primary" disabled={!isFormValid} type="submit">
          {isLogin ? "Sign In" : "Sign Up"}
        </Button>
      </form>
      <button onClick={switchForm} className="switch-form-link">
        {isLogin ? "Not a member? Register" : "Already a member? Sign In"}
      </button>
      <Modal isOpen={isOtpModalOpen} toggle={() => setIsOtpModalOpen(!isOtpModalOpen)}>
        <ModalHeader toggle={() => setIsOtpModalOpen(!isOtpModalOpen)}>Verify OTP</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="otp">OTP<span className="required">*</span></label>
            <Input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              className={otp.length === 6 ? "" : "error"}
            />
            {otp.length !== 6 && (
              <div className="error-message">OTP must be 6 digits</div>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleOtpSubmit} disabled={otp.length !== 6}>Submit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AuthComponent;
