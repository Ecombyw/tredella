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
        <Form layout="vertical">
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

          <Button type="primary" className="w-full">
            Send Email
          </Button>
          <div className="flex items-center justify-center mt-4 gap-1">
            <p>Back to</p>
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
