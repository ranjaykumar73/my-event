import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, '<<<name ', value, '<<<<value', 'namepasssss')
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      storedUserData.email === loginData.email &&
      storedUserData.spassword === loginData.password
    ) {
      navigate("/");
    } else {
      alert("login failed . Please check your credentials.", loginData);
    }

    console.log("Login Data:", loginData);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <div>
          <h1 className="justify-center flex text-4xl italic">Login Here !</h1>
          <form className="m-auto p-5 max-w-md border border-solid border-gray-300 rounded-2xl mt-4">
            <label for="mail">Enter your email:</label>
            <input
              name="email"
              type="mail"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your mail"
              onChange={handleOnChange}
            />
            <label for="password">Enter your Password:</label>
            <input
              name="password"
              type="password"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your password"
              onChange={handleOnChange}
            />
            <input
              type="submit"
              className="w-full text-white bg-[#4caf50] p-2.5 3.5 rounded cursor-pointer hover:bg-[#45a049]"
              value="Login"
              onClick={handleLogin}
            />
            <div className="mt-4">
              if you are not register go to
              <span>
                <Link to="/signup">
                  <u className="text-blue-800"> Register page</u>
                </Link>
              </span>
            </div>
          </form>
          </div>
      </div>
    </>
  );
};
