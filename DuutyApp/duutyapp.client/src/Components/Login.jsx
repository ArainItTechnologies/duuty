import { useState } from "react";

const LoginWithImage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div style={styles.container}>
            {/* Left Side: Image */}
            <div style={styles.imageSection}>
                <img
                    src="https://via.placeholder.com/1600x800" // Replace with your image URL
                    alt="Placeholder"
                    style={styles.image}
                />
            </div>

            {/* Right Side: Login Form */}
            <div style={styles.formSection}>
                <form onSubmit={handleLogin} style={styles.form}>
                    <h2 style={styles.title}>Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>
                <div style={styles.links}>
                    <a href="/forgot-password" style={styles.link}>
                        Forgot Password?
                    </a>
                    <span style={{ margin: "0 5px" }}>|</span>
                    <a href="/register" style={styles.link}>
                        No account? Sign up
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

export default LoginWithImage;
