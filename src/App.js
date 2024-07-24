import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [tkn, setTkn] = useState("");
  useEffect(() => {
    const fetchToken = async () => {
      try {
        // Realiza una petición para obtener el token y guardarlo en localStorage
        const response = await axios.get(
          "https://backend-test-psi-hazel.vercel.app",
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.error("Error fetching token", error);
      }
    };

    fetchToken();
  }, []);

  const accessProtectedRoute = async () => {
    try {
      const token = localStorage.getItem("token");
      setTkn(token);
      const response = await axios.get(
        "https://backend-test-psi-hazel.vercel.app/protected-route",
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error accessing protected route", error);
    }
  };

  return (
    <div>
      <h1>Aplicación</h1>
      <button onClick={accessProtectedRoute}>Acceder a ruta protegida</button>
    </div>
  );
};

export default App;
