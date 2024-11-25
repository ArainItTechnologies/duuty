import { useState } from "react";
import Logo from "../assets/logo.png";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Form Data:", formData);
        // Add registration logic here
    };

    return (
        <div style={styles.container}>
            {/* Left Side: Image */}
            <div style={styles.imageSection}>
                <img src={Logo} alt="" style={styles.image}/>
            </div>

            {/* Right Side: Register Form */}
            <div style={styles.formSection}>
                <form onSubmit={handleRegister} style={styles.form}>
                    <h2 style={styles.title}>Register</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>
                        Register
                    </button>
                </form>
                <div style={styles.links}>
                    <span>Already have an account? </span>
                    <a href="/login" style={styles.link}>
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        height: "100vh",
    },
    imageSection: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    formSection: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
    },
    form: {
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        textAlign: "center",
    },
    input: {
        padding: "10px",
        fontSize: "14px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    links: {
        marginTop: "10px",
        textAlign: "center",
        fontSize: "14px",
    },
    link: {
        color: "#007BFF",
        textDecoration: "none",
    },
};

export default Register;
