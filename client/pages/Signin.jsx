import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signin = () => {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();
  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const resp = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      if (data.success === false) {
        setloading(false);
        setError(data.message);
        return;
      }
      setloading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setloading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl my-7 text-center font-semibold">Sign-In</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <input
          className="border  p-3 rounded-lg focus:outline-none "
          required
          type="text"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
        />
        <label className="relative">
          <input
            className="border  p-3 rounded-lg  w-full focus:outline-none "
            type={showpass ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={changeHandler}
          />
          <span
            className="absolute right-5 top-4 cursor-pointer"
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
        <button className="border  p-3 rounded-lg uppercase bg-red-500 text-white">
          connect with google{" "}
        </button>
      </form>
      <div className="mt-5 flex gap-2">
        <p>Dont Have Account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signin;
