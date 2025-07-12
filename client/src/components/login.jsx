import React from "react";

const Login = () => {

     const handleSubmit = (e) => {
    
        // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    
        e.preventDefault()
        axios
          .post("http://localhost:5000/login", { name, email, password })
          .then((result) => console.log(result))
          .catch((result) => console.log("error"));
      }





  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        className="p-4 bg-white rounded shadow-sm"
        style={{ width: "320px" }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-4">Login</h3>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        <p className="text-center mt-3 mb-0">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
