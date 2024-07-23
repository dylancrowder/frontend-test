import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState("");

  const fetching = async () => {
    try {
      const response = await fetch(
        "https://backend-test-psi-hazel.vercel.app/token",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setToken(data.device);
      console.log(data);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="App">
      <h1>hola</h1>
      <h3>{token}</h3>
    </div>
  );
}

export default App;
