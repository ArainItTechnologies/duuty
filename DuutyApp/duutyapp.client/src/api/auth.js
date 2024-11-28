// Function to fetch weather forecast data
export const fetchWeatherData = async () => {
    try {
        const response = await fetch("weatherforecast"); // Replace with the correct API endpoint if needed
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        return data; // Return the weather data
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error; // Propagate error to be handled by the caller
    }
};


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

        const responseData = await response.json();
        return responseData;
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

      const responseData = await response.json();
      return responseData;
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