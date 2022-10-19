import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext/UserContext";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  console.log("create user register", user, createUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError(null);
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
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
          {error && (
            <p className="text-error border border-error p-1 my-3 rounded-xl text-center">
              {error}
            </p>
          )}
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
