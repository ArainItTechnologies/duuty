import {jwtDecode} from "jwt-decode";

export const getRoleFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
