import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  let navigate = useNavigate();

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://betmartoffical.herokuapp.com/api/users/signin-credentials",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      alert(json.error);
      setError(json.error);
    }

  if (response.ok) {
    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(json));

    // Update the auth context
    dispatch({ type: "LOGIN", payload: json });

    setIsLoading(false);

    navigate("/")
  }
  };
  return { signup, isLoading, error };
};
