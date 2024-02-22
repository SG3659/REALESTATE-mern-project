// eslint-disable-next-line no-unused-vars

import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl my-7 text-center font-semibold">Sign-In</h1>
      <form className="flex flex-col gap-3">
        <input
          className="border  p-3 rounded-lg"
          required
          type="text"
          placeholder="Email"
        />
        <input
          className="border  p-3 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="border  p-3 rounded-lg bg-slate-700 text-white hover:opacity-90">
          sign in{" "}
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
    </div>
  );
};

export default Signin;
