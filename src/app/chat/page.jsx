"use client";
import Container from "@/components/Layout/Container/Container";
import { Input } from "antd";
import React from "react";
import { BsChatFill } from "react-icons/bs";
import { GiTruce } from "react-icons/gi";
import { IoPaperPlane } from "react-icons/io5";

const Page = () => {
  const renderChat = (firstCharacter, storeName, showbg) => {
    return (
      <div
        className={`flex justify-between items-center ${
          showbg ? "bg-zinc-300" : ""
        }  p-2`}
      >
        <div className="flex gap-2 items-center">
          <div className="bg-primary rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <p className="text-[24px] text-white">{firstCharacter}</p>
          </div>
          <div>
            <h2 className="text-xs font-medium">{storeName}</h2>
            <p className="text-[10px]">This ia a new mess..</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-blue-400 text-white w-[15px] h-[15px] rounded-full text-[8px] flex items-center justify-center">
            10
          </div>
          <div className="text-[8px]">10:34PM</div>
        </div>
      </div>
    );
  };
  return (
    <Container>
      <div className="mt-10">
        <h2 className="font-bold text-xl">Chat</h2>
      </div>
      <div className="flex">
        <div className="w-[400px] border min-h-[400px] mt-5 rounded-l-xl overflow-hidden">
          <div className="flex justify-between items-center  p-2">
            <div className="flex gap-2 items-center">
              <div className="bg-primary rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <BsChatFill size={20} fill="white" />
              </div>
              <div>
                <h2 className="text-xs font-medium">Help & Support</h2>
                <p className="text-[10px]">This ia a new mess..</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-blue-400 text-white w-[15px] h-[15px] rounded-full text-[8px] flex items-center justify-center">
                10
              </div>
              <div className="text-[8px]">10:34PM</div>
            </div>
          </div>
          {renderChat("A", "Amazon Store")}
          {renderChat("D", "Daraz Store", GiTruce)}
          {renderChat("S", "Store")}
          {renderChat("P", "Party Store")}
          {renderChat("F", "Fation Store")}
          {renderChat("B", "Brand Store")}
        </div>
        <div className="w-full border min-h-[400px] mt-5 rounded-r-xl overflow-hidden">
          <div className="h-[56px] bg-zinc-300 flex items-center pl-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <p className="text-[24px] text-white">D</p>
              </div>
              <h2 className="text-xs font-medium">Daraz Store</h2>
            </div>
          </div>
          <div
            style={{ height: "calc(100% - 50px)" }}
            className="relative  p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-2">
                <div className="bg-primary w-[25px] h-[25px] rounded-full text-white text-lg flex items-center justify-center">
                  D
                </div>
                <div className="bg-primary text-white px-2 w-fit text-xs py-1 rounded-r-lg rounded-tl-lg">
                  Ask Any Question?
                </div>
              </div>
              <div className="flex gap-2 ml-auto justify-end mt-2">
                <div className="bg-zinc-400 text-white px-2 w-fit text-xs py-1 rounded-l-lg rounded-tr-lg max-w-[300px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
                <div className="bg-primary w-[25px] h-[25px] rounded-full text-white text-lg flex items-center justify-center">
                  B
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Input
                placeholder="Type your message here..."
                className="w-full"
              />
              <div className="bg-primary w-[36px] h-[30px] rounded-lg flex items-center justify-center cursor-pointer">
                <IoPaperPlane fill='white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
