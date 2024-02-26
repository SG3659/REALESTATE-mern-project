import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
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
    //request to the endpoint
    const response = await fetch('/api/auth/signup', {
      method: "POST", //indicating that it intends to create a new resource on the server.
      headers: {
        //to indicate that the request body contains JSON data
        "content-Type": "application/json",
      },
      /* converts this JavaScript object into a JSON string*/
      body: JSON.stringify(formData),
    });
    const data = await response.json(); //covert response we get to json
    console.log(data);
  };
  /*console.log(formData)*/

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center  font-semibold  my-7">Sign-Up</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          className="border  p-3 rounded-lg"
          required
          type="text"
          placeholder="Username"
          onChange={changeHandler}
          name="username"
        />
        <input
          className="border  p-3 rounded-lg"
          required
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          name="email"
        />
        <input
          className="border  p-3 rounded-lg"
          required
          type="password"
          placeholder="Password"
          onChange={changeHandler}
          name="password"
        />
        <button
          className="border  p-3 rounded-lg bg-slate-700 text-white hover:opacity-95
        disabled:opacity-80"
        >
          Sign-Up
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
        <p className="text-blue-700">
          <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
