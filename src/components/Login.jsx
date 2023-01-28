import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account created successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-decoration-underline">MyKeeper: Your Personal Note-Taking Assistant</p>
                <p className="lead text-center my-1">To know more, visit the About section above.</p>
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="just a sample" />
                  </div>
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <p className="text-center h1 fw-bolder mb-5 mx-1 mx-md-4 mt-4">Log in</p>
                    <form onSubmit={handleSubmit}>
                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <input type="email" value={credentials.email} onChange={onChange} id="email" name="email" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form1Example13">
                          Email address
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-4">
                        <input type="password" value={credentials.password} onChange={onChange} name="password" id="password" autoComplete="on" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form1Example23">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-around align-items-center mb-4">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                          <input defaultChecked={true} className="form-check-input" type="checkbox" value="" id="form1Example3" />
                          <label className="form-check-label" htmlFor="form1Example3">
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      {/* <!-- Submit button --> */}
                      <button type="submit" className="btn btn-primary btn-lg btn-block">
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
