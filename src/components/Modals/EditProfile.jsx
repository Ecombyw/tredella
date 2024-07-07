"use client";
import { Button, Form, Input, Modal } from "antd";
import React from "react";

const EditProfileModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      open={showModal}
      onCancel={() => setShowModal(false)}
      title="Edit Profile"
      footer={null}
    >
      <Form layout="vertical">
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Enter your full name" }]}
          className="mb-3"
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Enter your username" }]}
          className="mb-3"
        >
          <Input placeholder="Enter Your Username" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: "Enter your phone" }]}
          className="mb-3"
        >
          <Input placeholder="Enter Your Phone" />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: "Enter your country" }]}
          className="mb-3"
        >
          <Input placeholder="Enter Your Country" />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "Enter your city" }]}
          className="mb-3"
        >
          <Input placeholder="Enter Your City" />
        </Form.Item>
        <div className="mt-4 flex items-center justify-end gap-3">
          <Button onClick={() => setShowModal(false)}>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditProfileModal;
