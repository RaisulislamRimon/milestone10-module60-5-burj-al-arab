import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext/UserContext";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setError(null);
        console.log(user);
        form.reset();
        navigate("/room");
      })
      .catch((error) => {
        console.error(error);
        // setError(error);
        setError("User not found/Wrong password");
      });
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mx-auto mb-10">
          <div className="mb-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {error && (
            <p className="text-error border border-error p-1 my-3 rounded-xl text-center">
              {error}
            </p>
          )}

          {/* {error && <p className="error-text">{error}</p>} */}
          <button className="btn btn-wide btn-active btn-accent mx-auto my-10 text-white text-lg">
            Login
          </button>
          <p>
            New to Burj-Al-Arab?
            <Link to="/register" className="link link-primary">
              {" "}
              Register a New Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
