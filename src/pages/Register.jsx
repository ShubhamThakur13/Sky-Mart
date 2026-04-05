import React, { useContext } from "react";
import { User, Mail, Lock, Watch } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/MycontextApplication";
import { toast } from "react-toastify";

const Register = () => {

  let  {RegisterUsers, setRegisterUsers}=  useContext(MyContext)
   let navigate = useNavigate();
  let {register, handleSubmit, reset, formState:{errors, isValid}, watch} = useForm({
    mode: 'onChange'
  });

  let notification = () => toast('User registered SuccessFully....');

  let handlesubmitform = (data) => {
    let newuser = [...RegisterUsers,data]
    setRegisterUsers(newuser)
    localStorage.setItem('Registered Users',JSON.stringify(newuser));
    notification();
    reset();
  }

  let password = watch('password')
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">

      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-9 h-9 bg-[#C8F402] rounded-xl flex items-center justify-center">
          ⚡
        </div>
        <h1 className="text-white text-xl font-semibold">
          Sky<span className="text-[#C8F402]">Mart</span>
        </h1>
      </div>

      {/* Card */}
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 w-[380px] shadow-xl">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-white text-2xl font-semibold">Create account</h2>
          <p className="text-gray-400 text-sm">
            Join SkyMart and start shopping
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handlesubmitform)} className="flex flex-col gap-4">

          {/* Full Name */}
          <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-xl px-3">
            <User className="text-gray-400" size={18} />
            <input
            {...register('name',{required:'Name is required....'})}
              type="text"
              placeholder="Full name"
              className="bg-transparent w-full p-3 text-white outline-none"
            />
          </div>
           {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          {/* Email */}
          <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-xl px-3">
            <Mail className="text-gray-400" size={18} />
            <input
            {...register('email',{required: 'Email is required...'})}
              type="email"
              placeholder="Email address"
              className="bg-transparent w-full p-3 text-white outline-none"
            />
          </div>
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          {/* Password */}
          <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-xl px-3">
            <Lock className="text-gray-400" size={18} />
            <input
            {...register('password',{required:'Password is required...', minLength:{
              value: 6,
              message: 'Minimum 6 Character Required...'
            }})}
              type="password"
              placeholder="Password (min 6 chars)"
              className="bg-transparent w-full p-3 text-white outline-none"
            />
          </div>
           {errors.password && <p className="text-red-600">{errors.password.message}</p>}

          {/* Confirm Password */}
          {}
          <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-xl px-3">
            <Lock className="text-gray-400" size={18} />
            <input
            {...register('cpassword',{required: 'Confirm your password', validate: (value) =>  value === password || "Passwords do not match"})}
              type="password"
              placeholder="Confirm password"
              className="bg-transparent w-full p-3 text-white outline-none"
            />
          </div>
          {errors.cpassword && <p className="text-red-600">{errors.cpassword.message}</p>}

          {/* Button */}
          <button className="bg-[#C8F402] text-black font-semibold py-3 rounded-xl mt-2 hover:opacity-90 transition">
            Create Account →
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-500 text-sm text-center mt-6">
          Already have an account?{" "}
          <span onClick={()=> {navigate('/')}} className="text-[#C8F402] cursor-pointer">Sign in</span>
        </p>

      </div>
    </div>
  );
};

export default Register;