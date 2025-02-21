import React, { useState } from "react";
import "./RegisterPage.css";

export default function RegisterPage() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleRegister() {
    console.log("handleRegister");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="register-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Register</h2>

            {/* insert code here to create input elements for all the variables - firstName, lastName, email, password */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={details.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={details.lastName}
            />

            <input
              type="email"
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
            {/* insert code here to create a button that performs the `handleRegister` function on click */}

            <button onClick={handleRegister}>Register Here</button>
            <p className="mt-4 text-center">
              Already a member?
              <a href="/app/login" className="text-primary">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  ); //end of return
}
