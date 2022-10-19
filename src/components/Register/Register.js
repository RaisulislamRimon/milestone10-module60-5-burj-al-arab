import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mx-auto mb-10">
          <div className="mb-5">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
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
          <button className="btn btn-wide btn-active btn-accent mx-auto my-10 text-white text-lg">
            Register
          </button>
          <p>
            Already have an account?
            <Link to="/login" className="link link-primary">
              {" "}
              Sign in now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
