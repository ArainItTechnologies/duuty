export const userLogin = async (data) => {
    try {
        const response = await fetch("/api/Auth/Login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.log("Failed to login");
        }

        return await response.json();
    }
    catch (error) {
        console.error('API error:', error);
    }
}

export const userRegister = async (data) => {
  try {
      const response = await fetch("/api/Auth/Register", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          console.log("Failed to register");
      }

      return  await response.json();
  }
  catch (error) {
      console.error('API error:', error);
  }
}

export const userLogout = async (token) => {
    try {
      const response = await fetch("/api/Auth/Logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        console.log(`Logout failed: ${response.statusText}`);
      }
  
      return { success: true, message: "Logout successful." };
    } catch (error) {
      console.error("Error during logout:", error);
      return { success: false, message: error.message };
    }
  };