export const getUsersList = async (token) => {
  try {
    const response = await fetch("/api/Users/List", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addRoleToUser = async(data, token) => {
  try {
    const response = await fetch("/api/Users/AddUserRole", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.log(`Adding Role to user failed: ${response.statusText}`);
    }

    return { success: true, message: "Adding Role to user successful." };
  } catch (error) {
    console.error("Error during adding Role to user:", error);
    return { success: false, message: error.message };
  }
}
