"use client";
import { Button, Card, Form, Input } from "antd";
import Image from "next/image";
import React from "react";
import logoImage from "../../../../public/images/logo.webp";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
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
          <h2 className="font-semibold text-center text-[24px]">Signup</h2>
          <p className="text-center">Enter Your Information</p>
        </div>
        <Form layout="vertical">
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Enter your full name" }]}
            className="mb-2"
          >
            <Input placeholder="Enter Your Full Name" />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Enter your username" }]}
            className="mb-2"
          >
            <Input placeholder="Enter Your username" />
          </Form.Item>
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
          <Form.Item
            label="Phone"
            name="phoneNumber"
            rules={[{ required: true, message: "Enter your phone" }]}
            className="mb-2"
          >
            <Input placeholder="Enter Your Phone" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Enter your password" }]}
            className="mb-4"
          >
            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>

          <Button type="primary" className="w-full">
            Login
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
      </Card>
    </div>
  );
};

export default Page;
