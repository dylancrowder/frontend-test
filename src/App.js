import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const fetchToken = async () => {
      // Realiza una petición para que el backend setee la cookie
      await axios.get("https://backend-test-psi-hazel.vercel.app", {
        withCredentials: true,
      });
    };

    fetchToken();
  }, []);

  const accessProtectedRoute = async () => {
    try {
      const response = await axios.get(
        "https://backend-test-psi-hazel.vercel.app/protected-route",
        {
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
