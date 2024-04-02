import { useState, useEffect } from "react";

const useAuth = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const Login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const user = await fetch(
        "https://auth-microservice-auth.onrender.com/api/v1/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await user.json();
      setResponse(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     makeRequest();
  //   }, [url, method, body, headers]);

  return { response, error, loading, Login };
};

export default useAuth;
