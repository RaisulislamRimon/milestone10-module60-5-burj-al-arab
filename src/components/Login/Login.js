import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Login</h2>
      <div className="form-control w-full max-w-xs mx-auto mb-10">
        <div className="mb-5">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
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
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
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
    </div>
  );
};

export default Login;
