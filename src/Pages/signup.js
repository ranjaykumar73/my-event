import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    number: "",
    spassword: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnChecked = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.fname.length < 3) {
        alert("Enter your correct name");
      } else if (formData.lname.length < 3) {
        alert("Enter your correct last name");
      } else if (
        formData.email.length < 3 ||
        formData.email.indexOf("@") === -1
      ) {
        alert("Enter your correct E-mail");
      } else if (formData.gender === "") {
        alert("Please select your gender");
      } else if (formData.number.length < 9) {
        alert("Enter your correct mobile number");
      } else if (formData.spassword.length < 3) {
        alert("Enter correct password");
      } else if (formData.cpassword.length < 3) {
        alert("Enter correct password");
      } else if (formData.spassword !== formData.cpassword) {
        alert("Password does not match");
      } else {
        await axios.post("http://localhost:3000/datas", formData);

        localStorage.setItem("userData", JSON.stringify(formData));
        setFormData({
          fname: "",
          lname: "",
          email: "",
          gender: "",
          number: "",
          spassword: "",
          cpassword: "",
        });

        alert("Registration successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <div>
        <div className="justify-center flex  text-4xl mt-[90%] italic">
          Sign UP Here!
        </div>
        <div className="justify-center flex mt-4">
          <form className=" m-auto p-5 max-w-md border border-solid border-gray-300 rounded-2xl ">
            <label for="fname">First Name:</label>
            <br></br>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              id="fname"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your first name"
              onChange={handleOnChange}
            />
            <br></br>
            <label for="lname">Last Name:</label>
            <br></br>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              id="lname"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your last name"
              onChange={handleOnChange}
            />
            <br></br>
            <label>E-mail:</label>
            <br></br>
            <input
              type="email"
              name="email"
              value={formData.email}
              id="mail"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your email address"
              onChange={handleOnChange}
            />
            <br></br>
            <label>Select your Gender:</label>
            <br></br>
            <div className="justify-evenly flex ">
              <label for="male">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleOnChecked}
                />
                Male
              </label>
              <label for="female">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleOnChecked}
                />
                Female
              </label>
              <label for="other">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleOnChecked}
                />
                Other
              </label>
            </div>
            <label>Contact no:</label> <br></br>
            <input
              type="number"
              name="number"
              value={formData.number}
              id="contact"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your number"
              onChange={handleOnChange}
            />
            <br></br>
            <label>Set new Password:</label> <br></br>
            <input
              type="password"
              name="spassword"
              value={formData.spassword}
              id="password"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your new password"
              onChange={handleOnChange}
            />{" "}
            <br></br>
            <label>Confirm new Password:</label>
            <br></br>
            <input
              type="password"
              name="cpassword"
              value={formData.cpassword}
              id="Cpassword"
              className="w-full p-2 border-[2px] border-black rounded mb-4"
              placeholder="enter your confirm password"
              onChange={handleOnChange}
            />
            <br></br>
            <input
              type="submit"
              className="w-full text-white bg-[#4caf50] p-2.5 3.5 rounded cursor-pointer hover:bg-[#45a049]"
              value="submit"
              onClick={handleSubmit}
            />
            <div className="mt-4">
              if you are already registered go to
              <Link to="/login">
                {" "}
                <u className="text-blue-800">Login page</u>{" "}
              </Link>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};
