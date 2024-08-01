"use client";
import { Button, Card, Col, Form, Input, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import logoImage from "../../../../public/images/logo.webp";
import { useRouter } from "next/navigation";
import { getReducer } from "@/redux/reducer";
import { useDispatch } from "react-redux";
import { authApi } from "@/redux/actions/authApis";
import LoginBg from "../../../../public/images/login.png";
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
    <Row className="h-screen w-screen" gutter={40}>
      <Col
        xl={8}
        lg={8}
        md={8}
        sm={0}
        xs={0}
        className="md:block hidden h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${LoginBg.src})` }}
      >
        <div className="pt-10">
          <Image
            src={logoImage}
            alt=""
            className="w-[200px] h-[80px] mx-auto"
          />
        </div>
        <div className="my-3">
          <h2 className="font-semibold text-center text-[24px]">
            We Offer the Best Products
          </h2>
        </div>
      </Col>
      <Col
        xl={16}
        lg={16}
        md={16}
        sm={24}
        xs={24}
        className="w-full h-full flex items-center justify-center"
      >
        <div>
          <div className="md:w-[400px] w-full  md:px-0 px-5">
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
              <Button
                htmlType="submit"
                loading={loader}
                disabled={loader}
                type="primary"
                className="w-full"
              >
                Login
              </Button>
              <div className="flex items-center justify-center mt-4 gap-1">
                <p>Don't have an account?</p>
                <p
                  className="hover:underline cursor-pointer font-semibold"
                  onClick={() => router.push("/register")}
                >
                  Signup
                </p>
              </div>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Page;
