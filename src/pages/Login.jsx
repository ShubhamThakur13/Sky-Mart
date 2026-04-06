import React, { useContext } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/MycontextApplication";
import { toast } from "react-toastify";

const Login = () => {
  let { LoggedUser, setLoggedUser, RegisterUsers } = useContext(MyContext);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  let navigate = useNavigate();

  // ✅ FORM SUBMIT
  let handlesubmitform = (data) => {
    // safety check
    let user = RegisterUsers?.find(
      (elem) =>
        elem.email === data.email && elem.password === data.password
    );

    if (!user) {
      reset()
      toast.error("Invalid email or password");
      return;
    }

    // success
    localStorage.setItem("Logged User", JSON.stringify(user));
    setLoggedUser(user);
    toast.success("User Logged In");

    reset();
    navigate("/dashboard"); // redirect
  };

  return (
    <div className="h-screen bg-black text-white flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-lime-400 text-black p-2 rounded-lg font-bold">
            ⚡
          </div>
          <h1 className="text-xl font-semibold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        <p className="text-lime-400 text-sm mb-3">WELCOME BACK</p>

        <h1 className="text-5xl font-bold leading-tight mb-4">
          Shop the future. <br />
          <span className="text-lime-400">Today.</span>
        </h1>

        <p className="text-gray-400 mb-10">
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-10 w-[400px] shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-400 text-sm mb-6">
            Enter your credentials to continue
          </p>

          {/* ✅ FORM START */}
          <form onSubmit={handleSubmit(handlesubmitform)}>
            
            {/* Email */}
            <div className="flex items-center bg-[#1a1a1a] rounded-lg px-4 py-3 mb-2 border border-gray-800">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                {...register("email", {
                  required: "Email is required...",
                })}
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            {errors.email && (
              <p className="text-red-600 mb-3">
                {errors.email.message}
              </p>
            )}

            {/* Password */}
            <div className="flex items-center bg-[#1a1a1a] rounded-lg px-4 py-3 mb-2 border border-gray-800">
              <Lock size={18} className="text-gray-400 mr-2" />
              <input
                {...register("password", {
                  required: "Password is required...",
                })}
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            {errors.password && (
              <p className="text-red-600 mb-4">
                {errors.password.message}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition"
            >
              Sign in →
            </button>
          </form>
          {/* ✅ FORM END */}

          {/* Footer */}
          <p className="text-gray-400 text-sm text-center mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-lime-400 cursor-pointer"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;