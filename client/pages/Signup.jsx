import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showpass, setShowpass] = useState(false);

  const navigate = useNavigate();
  // to store previous data
  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  //console.log(formData);
  //that handles form submission by sending a POST request to a server-side endpoint
  const submitHandler = async (event) => {
    event.preventDefault(); // to prevent reload page on submit
    try {
      setLoading(true);
      //request to the endpoint
      const response = await fetch("/api/auth/signup", {
        method: "POST", //indicating that it intends to create a new resource on the server.
        headers: {
          //to indicate that the request body contains JSON data
          "content-Type": "application/json",
        },
        /* converts this JavaScript object into a JSON string*/
        body: JSON.stringify(formData),
      });
      const data = await response.json(); //covert response we get to json
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      /*console.log(formData)*/
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center  font-semibold  my-7">Sign-Up</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          className="border  p-3 rounded-lg focus:outline-none"
          type="text"
          placeholder="Username"
          onChange={changeHandler}
          name="username"
        />
        <input
          className="border  p-3 rounded-lg focus:outline-none"
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          name="email"
        />
        <label className="relative">
          <input
            className="border  p-3 rounded-lg w-full focus:outline-none"
            type={showpass ? "text" : "password"}
            placeholder="Password"
            onChange={changeHandler}
            name="password"
          />
          <span
            className="absolute right-5 top-4 cursor-pointer "
            onClick={() => setShowpass((prev) => !prev)}
          >
            {showpass ? (
              <AiOutlineEyeInvisible fontSize={24} />
            ) : (
              <AiOutlineEye fontSize={24} />
            )}
          </span>
        </label>
        <button
          className="border  p-3 rounded-lg bg-slate-700 text-white hover:opacity-95
        disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <button
          className="border  p-3 rounded-lg bg-red-500 text-white hover:opacity-95
         uppercase disabled:opacity-80"
        >
          connect with google
        </button>
      </form>
      <div className="mt-5 flex gap-2">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signup;
