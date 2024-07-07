"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import Image from "next/image";
import t1 from "../../../public/images/t1.jpg";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";
import ProfileTab from "@/components/ui/Tabs/profileTab";
import ModalView from "@/components/ui/Modal";
import EditProfileModal from "@/components/Modals/EditProfile";
import { Button, Tabs, Tag } from "antd";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (type) => {
    switch (type) {
      case "old":
        setShowOldPassword(!showOldPassword);
        break;
      case "new":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirm":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const closeToggle = () => {
    setIsVisible(false);
  };
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    const trackingID = "DHA72512831"; // Replace this with your actual tracking ID or fetch it from wherever it's stored
    const tempInput = document.createElement("input");
    tempInput.value = trackingID;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Display alert
    setShowAlert(true);
    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const renderChildTab = () => {
    return (
      <div className="max-h-[500px] overflow-y-scroll">
        <div className="rounded-md shadow mt-2 p-2 flex flex-wrap  justify-between items-center">
          <div className="flex gap-2 w-full">
            <div>
              <Image
                width={150}
                height={150}
                className="bg-contain rounded-md"
                src={t1}
                alt="order"
              />
            </div>
            <div>
              <p className="font-semibold">
                {" "}
                <span>Order ID: #</span>165416516554{" "}
              </p>
              <p className="font-medium">
                {" "}
                <span>Date: </span>10/4/2024
              </p>
              <div>
                {showAlert && (
                  <div className="alert alert-success text-xs" role="alert">
                    Tracking ID copied to clipboard
                  </div>
                )}
                <p className="font-medium flex gap-2 items-center">
                  <span>Tracking ID: </span>DHA72512831
                  <RxCopy
                    onClick={handleCopy}
                    className="cursor-pointer"
                    size={20}
                  />
                </p>
                <p className="font-medium flex gap-2 items-center mt-1">
                  <span>Status: </span>
                  <Tag color="green">Approved</Tag>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ProfileTab
        className={""}
        tabs={[
          {
            label: "Profile",
            content: (
              <>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 md:grid-cols-3 space-y-2">
                    <div>
                      <h3 className="font-medium md:font-medium text-lg">
                        Full name:
                      </h3>
                      <p className="text-sm">Ahmad</p>
                    </div>
                    <div>
                      <h3 className="font-medium md:font-medium text-lg">
                        UserName:
                      </h3>
                      <p className="text-sm">Ahmad</p>
                    </div>
                    <div>
                      <h3 className="font-medium md:font-medium text-lg">
                        Email Address:
                      </h3>
                      <p className="text-sm">Ahmad</p>
                    </div>
                    <div>
                      <h3 className="font-medium md:font-medium text-lg">
                        Mobile:
                      </h3>
                      <p className="text-sm">Ahmad</p>
                    </div>
                    <div>
                      <h3 className="font-medium md:font-medium text-lg">
                        Country:
                      </h3>
                      <p className="text-sm">Ahmad</p>
                    </div>
                    <div>
                      <h3 className="font-medium md:font-medium text-lg">
                        City:
                      </h3>
                      <p className="text-sm">Ahmad</p>
                    </div>
                    <div className="pt-5">
                      <Button
                        type="primary"
                        className="w-[150px]"
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
          {
            label: "View Order",
            content: (
              <>
                <Tabs
                  items={[
                    {
                      label: "All",
                      children: renderChildTab(),
                      key: "1",
                      tabKey: "1",
                    },
                    {
                      label: "Approved",
                      children: renderChildTab(),
                      key: "2",
                      tabKey: "2",
                    },
                    {
                      label: "Canceled",
                      children: renderChildTab(),
                      key: "3",
                      tabKey: "3",
                    },
                    {
                      label: "Ship",
                      children: renderChildTab(),
                      key: "4",
                      tabKey: "4",
                    },
                    {
                      label: "Deliver",
                      children: renderChildTab(),
                      key: "5",
                      tabKey: "5",
                    },
                    {
                      label: "Resived",
                      children: renderChildTab(),
                      key: "6",
                      tabKey: "6",
                    },
                    {
                      label: "Return",
                      children: renderChildTab(),
                      key: "7",
                      tabKey: "7",
                    },
                  ]}
                ></Tabs>
              </>
            ),
          },
          {
            label: "Reset Password",
            content: (
              <>
                <div className="container-sm">
                  <form className="max-w-screen-sm space-y-3">
                    <div>
                      <label
                        htmlFor="hs-input-with-add-on-url"
                        className=" font-medium"
                      >
                        Enter Old Password
                      </label>
                      <div className="flex rounded-lg shadow-sm border">
                        <input
                          type={showOldPassword ? "text" : "password"}
                          className="py-3 px-4 pe-11 block w-full  rounded-s-lg text-sm focus:z-10 outline-none"
                          placeholder="Enter Old Password"
                        />
                        <div className="px-4 inline-flex items-center min-w-fit border">
                          <span
                            className="input-group-text"
                            onClick={() => togglePasswordVisibility("old")}
                          >
                            {showOldPassword ? (
                              <IoEye size={20} />
                            ) : (
                              <IoEyeOff size={20} />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="hs-input-with-add-on-url"
                        className=" font-medium"
                      >
                        Enter New Password
                      </label>
                      <div className="flex rounded-lg shadow-sm border">
                        <input
                          type={showOldPassword ? "text" : "password"}
                          className="py-3 px-4 pe-11 block w-full  rounded-s-lg text-sm focus:z-10 outline-none"
                          placeholder="Enter New Password"
                        />
                        <div className="px-4 inline-flex items-center min-w-fit border">
                          <span
                            className="input-group-text"
                            onClick={() => togglePasswordVisibility("new")}
                          >
                            {showNewPassword ? (
                              <IoEye size={20} />
                            ) : (
                              <IoEyeOff size={20} />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="hs-input-with-add-on-url"
                        className=" font-medium"
                      >
                        Enter Confirm Password
                      </label>
                      <div className="flex rounded-lg shadow-sm border">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className="py-3 px-4 pe-11 block w-full  rounded-s-lg text-sm focus:z-10 outline-none"
                          placeholder="Enter Confirm Password"
                        />
                        <div className="px-4 inline-flex items-center min-w-fit border">
                          <span
                            className="input-group-text"
                            onClick={() => togglePasswordVisibility("confirm")}
                          >
                            {showConfirmPassword ? (
                              <IoEye size={20} />
                            ) : (
                              <IoEyeOff size={20} />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="p-2 px-4 rounded-md bg-primary text-white ">
                      Save
                    </button>
                  </form>
                </div>
              </>
            ),
          },
          { label: "Logout" },
        ]}
      />
      <EditProfileModal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default Profile;
