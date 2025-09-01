const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:8080/auth/login", {
      username: username,
      password: password,
    });

    // Store the JWT token in localStorage
    localStorage.setItem("token", response.data.token);
    alert("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
  }
};
