import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLOgin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://betmartoffical.herokuapp.com/api/users/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(json));

      // Update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      window.location.href = "/";
    }
  };
  return { login, isLoading, error };
};
