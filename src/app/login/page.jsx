"use client";

import Container from "@/components/common/Container";
import { currentUserInfo } from "@/lib/authSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleEmailInput = (e) => {
    setUserInfo({
      ...userInfo,
      email: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });
  };
  const handleLogin = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, userInfo)
      .then((res) => {
        console.log(res.data.success)
        console.log(res.data.data)
        if (res.data) {
          dispatch(currentUserInfo(res.data.data));       
          toast.success("Login Successfully!");
          router.push("/");
        }
      })
      .catch((err) => {
        toast.error(
          err.response?.data?.message || err.message || "Something went wrong"
        );
      });
  };
  const handleCreate = () => {
    router.push("/registration");
  };
  return (
    <Container>
        <div className="flex justify-center">


        <div className="bg-white w-[424px] p-8 rounded-xl text-center ">
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <h2 className="text-[#191C1F] font-public_sans mb-[20px] text-xl">
        Sign in to your account
      </h2>
      <p className="text-left">Email Address</p>
      <input
        onChange={handleEmailInput}
        className="w-[360] border-gray-300 border rounded-[2px] h-[44px] mt-2 mb-4"
        type="text"
      />
      <p className="text-left mb-2">Password</p>
      <input
        onChange={handlePassword}
        className="w-[360] border-gray-300 border rounded-[2px] h-[44px] mb-5"
        type="text"
      />
      <button
        onClick={handleLogin}
        className="hover:bg-amber-700 hover:cursor-pointer mx-auto block bg-[#FA8232] w-[360px] text-white font-semibold text-[20px] py-2 mb-6"
      >
        Login
      </button>
      <p className="text-gray-300">Don't have account</p>

      <button
        onClick={handleCreate}
        className="mx-auto block hover:bg-amber-700 hover:cursor-pointer hover:text-white border-[#FA8232] border mt-3 w-[360px] text-[#FA8232] font-semibold text-[20px] py-2 mb-6"
      >
        Create Account
      </button>
    </div>
        </div>
    </Container>
  );
};

export default SignUp;
