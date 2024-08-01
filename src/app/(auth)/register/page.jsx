"use client";
import { Button, Card, Col, Form, Input, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import logoImage from "../../../../public/images/logo.webp";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getReducer } from "@/redux/reducer";
import { authApi } from "@/redux/actions/authApis";
import SignupBg from "../../../../public/images/signup.png";
const Page = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const setLoginData = getReducer("userInfo");
  const setToken = getReducer("token");

  const onFinish = (data) => {
    data["confirm_password"] = data?.password;
    data["mail_verify_url"] = "http://127.0.0.1:8000/api/buyer/verify_email";
    authApi(dispatch, data, setToken, setLoginData, setLoader, "buyer/signup");
  };
  return (
    <Row className="h-screen w-screen" gutter={40}>
      <Col
        xl={8}
        lg={8}
        md={8}
        className="md:block hidden h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${SignupBg.src})` }}
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
        className="w-full h-full flex items-center justify-center overflow-y-auto"
      >
        <div className="md:w-[400px] w-full mr-0 ml-7">
          <div className="mb-5">
            <h2 className="font-semibold text-center text-[26px]">Signup</h2>
            <p className="text-center font-normal">
              Enter Your Account Details
            </p>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Row gutter={10}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label="First Name"
                  name="first_name"
                  rules={[{ required: true, message: "Enter your first name" }]}
                  className="mb-2"
                >
                  <Input placeholder="Enter Your Full Name" />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label="Last Name"
                  name="last_name"
                  rules={[{ required: true, message: "Enter your last name" }]}
                  className="mb-2"
                >
                  <Input placeholder="Enter Your Full Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Enter your email" },
                    { type: "email", message: "Enter valid email" },
                  ]}
                  className="mb-2"
                >
                  <Input placeholder="Enter Your Email" />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label="Phone"
                  name="mobile_number"
                  rules={[{ required: true, message: "Enter your phone" }]}
                  className="mb-2"
                >
                  <Input placeholder="Enter Your Phone" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: "Enter your username" }]}
                  className="mb-2"
                >
                  <Input placeholder="Enter Your username" />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[{ required: true, message: "Enter your country" }]}
                  className="mb-2"
                >
                  <Input placeholder="Enter Your Country" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Enter your password" }]}
              className="mb-4"
            >
              <Input.Password placeholder="Enter Your Password" />
            </Form.Item>

            <Button
              loading={loader}
              disabled={loader}
              htmlType="submit"
              type="primary"
              className="w-full"
            >
              Signup
            </Button>
            <div className="flex items-center justify-center mt-4 gap-1">
              <p>I have an already account</p>
              <p
                className="hover:underline cursor-pointer font-semibold"
                onClick={() => router.push("/login")}
              >
                Login
              </p>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Page;
