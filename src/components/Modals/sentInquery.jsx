"use client";
import { Button, Form, Input, Modal } from "antd";
import React from "react";

const SentInquery = ({ showModal, setShowModal }) => {
  return (
    <Modal
      open={showModal}
      onCancel={() => setShowModal(false)}
      title="Inquery"
      footer={null}
    >
      <Form layout="vertical">
        <Form.Item
          name="inquery"
          label="Sent Inquery"
          rules={[{ required: true }]}
        >
          <Input.TextArea placeholder="Enter Your Inquery..." />
        </Form.Item>
        <div className="mt-4 flex items-center justify-end gap-3">
          <Button onClick={() => setShowModal(false)}>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default SentInquery;
