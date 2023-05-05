import { useState } from "react";
import axios from "axios";
import "../../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    navigate("/");
    console.log(response);
    const { accessToken } = response.tokenObj;
    sessionStorage.setItem("accessToken", accessToken); // TODO: Implement success handling logic
  };

  const handleLoginFailure = (error) => {
    console.error(error); // TODO: Implement failure handling logic
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/auth/login", { email, password });
      localStorage.setItem("authToken", data.token);

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 4500);
    }
  };

  return (
    <div className="Inclusive-login-page">
      <div className="login-big-wrapper">
        <div className="section-wrapper">
          <div className="top-suggest_register">
            <span>Don't have an account? </span>
            <a href="/register">Sign Up</a>
          </div>

          <div className="top-login-explain">
            <h2>Login to Your Account </h2>
          </div>

          <form onSubmit={loginHandler}>
            {error && <div className="error_message">{error}</div>}
            <div className="input-wrapper">
              <input
                type="email"
                required
                id="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                tabIndex={1}
              />
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="6+ strong character"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
              <label htmlFor="password">Password</label>
            </div>
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              {" "}
              Forgot Password ?
            </Link>
            <button
              class="class=text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              type="submit"
            >
              Login
            </button>
            <GoogleLogin
              clientId="1081086113702-c6nr2s3ubdmglgb2ojsv8u06ji9e7lsu.apps.googleusercontent.com"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy={"single_host_origin"}
              className="google-auth-button"
              render={(renderProps) => (
                <button
                  type="button"
                  class="class=text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                  onClick={renderProps.onClick}
                >
                  <svg
                    class="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
              )}
            />
          </form>
        </div>

        <div className="login-banner-section ">
          <img src="login.png" alt="banner" width="400px" />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
