"use client";
import { Button, Form, Input, Modal } from "antd";
import React from "react";

const DeliveryAddressModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      open={showModal}
      onCancel={() => setShowModal(false)}
      title="Delivery Address"
      footer={null}
    >
      <Form layout="vertical">
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input placeholder="Enter Your Address" />
        </Form.Item>
        <Form.Item name="country" label="Country" rules={[{ required: true }]}>
          <Input placeholder="Enter Your Country" />
        </Form.Item>
        <Form.Item name="city" label="City" rules={[{ required: true }]}>
          <Input placeholder="Enter Your City" />
        </Form.Item>
        <Form.Item name="zipCode" label="Zip Code" rules={[{ required: true }]}>
          <Input placeholder="Enter Your Zip Code" />
        </Form.Item>
        <div className="mt-4 flex items-center justify-end gap-3">
          <Button onClick={() => setShowModal(false)}>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default DeliveryAddressModal;
