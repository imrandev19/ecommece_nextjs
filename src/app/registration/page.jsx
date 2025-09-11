"use client";
import Container from "@/components/common/Container";
import { currentUserInfo } from "@/lib/authSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
const page = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
    username: "",
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
  const handleUser = (e) => {
    setUserInfo({
      ...userInfo,
      username: e.target.value,
    });
  };
  const handleReg = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, userInfo)
      .then((res) => {
        if (res.data.success) {
          setUserInfo({
            username: "",
            email: "",
            password: "",
          });
          const currentUser ={
            username: res.data.user.username,
            email: res.data.user.email,
            message: res.data.message,
          }
          dispatch(currentUserInfo(currentUser))
          localStorage.setItem('currentUser', JSON.stringify(currentUser))
          toast.success('Account Created Successfully!')
          router.push("/otp-verify")
        }else{
            toast.error("Something went Wrong")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="flex justify-center">
        <div className="bg-white w-[424px] p-8 rounded-xl text-center">
          <h2 className="text-[#191C1F] font-public_sans mb-[20px] text-xl">
            Sign Up for new account
          </h2>

          <p className="text-left">User Name</p>
          <input
            onChange={handleUser}
            className="w-[360] border-gray-300 border rounded-[2px] h-[44px] mt-2 mb-4"
            type="text"
          />
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
            onClick={handleReg}
            className="mx-auto block bg-[#FA8232] w-[360px] text-white font-semibold text-[20px] py-2 mb-6 hover:cursor-pointer hover:bg-amber-600"
          >
            Create Account
          </button>
        </div>
      </div>
    </Container>
  );
};

export default page;
