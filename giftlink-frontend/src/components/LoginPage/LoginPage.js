import React, { useState } from "react";

export default function LoginPage() {
  const [details, setDetails] = useState({ email: "", password: "" });

  function handleLogin() {
    console.log("Login Pressed");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Login</h2>
            {/* insert code here to create input elements for the variables email and  password */}
            <input
              type="text"
              name="email"
              placeholder="email"
              value={details.email}
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              value={details.password}
            />
            {/* insert code here to create a button that performs the `handleLogin` function on click */}
            <button onClick={handleLogin}>Login</button>
            <p className="mt-4 text-center">
              New here?{" "}
              <a href="/app/register" className="text-primary">
                Register Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
