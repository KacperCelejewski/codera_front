import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000";

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        if (response.status === 401)
          throw new Error("Invalid username or password");
        throw new Error("Something went wrong. Please try again later.");
      }

      const data = await response.json();
      if (!data.access || !data.refresh) throw new Error("Token not found");

      const success = signIn({
        auth: {
          token: data.access,
          type: "Bearer",
          expiresIn: 3600,
        },
      });

      if (success) {
        navigate("/");
      } else {
        setError("Sign-in failed, please try again.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          fetchData(
            formData.get("username") as string,
            formData.get("password") as string,
          );
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          disabled={loading}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
