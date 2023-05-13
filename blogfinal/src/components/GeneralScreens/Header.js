import React, { useState, useEffect, useContext, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import "../../Css/Header.css";
import { RiPencilFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import SkeletonElement from "../Skeletons/SkeletonElement";
import { AuthContext } from "../../Context/AuthContext";

const LoginDataContext = createContext();

const Header = () => {
  const loginDataFromLocalStorage = localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData"))
    : null;
  const [loginData, setLoginData] = useState(loginDataFromLocalStorage);

  console.log(loginData);
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  return (
    <LoginDataContext.Provider value={loginData}>
      <header>
        <div className="averager">
          <Link to="/" className="logo">
            <h5>Assist-Ace</h5>
          </Link>
          <SearchForm />
          <div className="header_options">
            {auth || loginData ? (
              <div className="auth_options">
                <Link className="addStory-link" to="/addstory">
                  <RiPencilFill /> Create{" "}
                </Link>

                <Link to="/readList" className="readList-link">
                  <BsBookmarks />
                  <span id="readListLength">{activeUser.readListLength}</span>
                </Link>
                <div className="header-profile-wrapper ">
                  {loading ? (
                    <SkeletonElement type="minsize-avatar" />
                  ) : (
                    <>
                      {activeUser.photo ? (
                        <img
                          src={`http://localhost:5000/userPhotos/${activeUser.photo}`}
                          alt={activeUser.username}
                        />
                      ) : (
                        <img
                          src={loginData.picture}
                          alt={activeUser.username}
                        />
                      )}
                    </>
                  )}
                  {loginData ? (
                    <div className="sub-profile-wrap">
                      <button className="logout-btn" onClick={handleLogout}>
                        {" "}
                        <BiLogOut /> Logout
                      </button>
                    </div>
                  ) : (
                    <div className="sub-profile-wrap">
                      <Link className="profile-link" to="/profile">
                        {" "}
                        <FaUserEdit /> Profile{" "}
                      </Link>

                      <button className="logout-btn" onClick={handleLogout}>
                        {" "}
                        <BiLogOut /> Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="noAuth_options">
                <Link className="login-link" to="/login">
                  {" "}
                  Login{" "}
                </Link>

                <Link className="register-link" to="/register">
                  {" "}
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </LoginDataContext.Provider>
  );
};

export default Header;
