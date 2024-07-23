import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState("");

  const fetching = async () => {
    const response = await fetch(
      "https://backend-test-psi-hazel.vercel.app/token"
    );
    const data = await response.json();
    setToken(data.token);
    console.log(data);
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
