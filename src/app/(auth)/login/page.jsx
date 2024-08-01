"use client";
import { Button, Card, Form, Input } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import logoImage from "../../../../public/images/logo.webp";
import { useRouter } from "next/navigation";
import { getReducer } from "@/redux/reducer";
import { useDispatch } from "react-redux";
import { authApi } from "@/redux/actions/authApis";
const Page = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const setLoginData = getReducer("userInfo");
  const setToken = getReducer("token");

  const onFinish = (data) => {
    authApi(dispatch, data, setToken, setLoginData, setLoader, "buyer/login");
  };
  return (
    <div className="h-screen w-screen bg-[#FAFAFA] flex items-center justify-center">
      <Card className="md:w-[400px]">
        <div>
          <Image
            src={logoImage}
            alt=""
            className="w-[200px] h-[80px] mx-auto"
          />
        </div>
        <div className="my-3">
          <h2 className="font-semibold text-center text-[24px]">
            Welcome Back!
          </h2>
          <p className="text-center font-normal">
            Enter your email and password
          </p>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Enter your email" },
              { type: "email", message: "Enter valid email" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Enter your password" }]}
            className="mb-2"
          >
            <Input.Password />
          </Form.Item>
          <div className="flex items-center justify-end mb-2">
            <p
              className="hover:underline cursor-pointer"
              onClick={() => router.push("/forgotPassword")}
            >
              Forgot Password
            </p>
          </div>
          <Button htmlType='submit' loading={loader} disabled={loader} type="primary" className="w-full">
            Login
          </Button>
          <div className="flex items-center justify-center mt-4 gap-1">
            <p>Don`&apos;`thave an account?</p>
            <p
              className="hover:underline cursor-pointer font-semibold"
              onClick={() => router.push("/register")}
            >
              Signup
            </p>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Page;
