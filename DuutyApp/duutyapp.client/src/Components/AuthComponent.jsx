import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Auth.css";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import { userLogin, userRegister } from "../api/auth";
import { getRoleFromToken } from "../utils/jwtUtils";

const AuthComponent = ({ route }) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(route === "login" ? true : false);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };
  const handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    var response = await userLogin(loginFormData);

    var authToken = response.token;
    if (authToken !== null) {
      localStorage.setItem("token", authToken);

      // Get the user's role
      const role = getRoleFromToken(authToken);

      // Navigate based on the role
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
      }
    } else {
      navigate("/login");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    var response = await userRegister(registerFormData);

    alert(response.message);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <Button
            onClick={() => setIsLogin(true)}
            className={isLogin ? "active" : ""}
          >
            Login
          </Button>
          <Button
            onClick={() => setIsLogin(false)}
            className={!isLogin ? "active" : ""}
          >
            Signup
          </Button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <Form className="login-form" onSubmit={handleLogin}>
                <FormGroup floating>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleLoginFormChange}
                  />
                  <Label for="email">Email</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleLoginFormChange}
                  />
                  <Label for="password">Password</Label>
                </FormGroup>
                <NavLink target="/forgot-password">Forgot Password?</NavLink>
                <Button type="submit">Login</Button>
                <p>
                  Not a member?{" "}
                  <NavLink href="#" onClick={() => setIsLogin(false)}>
                    Signup Now
                  </NavLink>
                </p>
              </Form>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <Form className="signup-form" onSubmit={handleSignUp}>
                <FormGroup floating>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleRegisterFormChange}
                  />
                  <Label for="email">Email</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleRegisterFormChange}
                  />
                  <Label for="password">Password</Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={handleRegisterFormChange}
                  />
                  <Label for="confirmPassword">Confirm Password</Label>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
                <p>
                  Already member?
                  <NavLink href="#" onClick={() => setIsLogin(true)}>
                    Signin
                  </NavLink>
                </p>
              </Form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

AuthComponent.propTypes = {
  route: PropTypes.string.isRequired,
};

export default AuthComponent;
