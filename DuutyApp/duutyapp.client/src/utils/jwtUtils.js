import {jwtDecode} from "jwt-decode";

export const getRoleFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    console.log(decoded)
    return decoded.role;

  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
