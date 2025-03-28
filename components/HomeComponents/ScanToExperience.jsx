"use client";

import Image from "next/image";
import qrImg from "@/public/HomeImages/qrImg.png";

const ScanToExperience = () => {
  return (
    <section className="py-20">
      <div className="w-full h-auto bg-black">
        <div className="w-full width-container relative mx-auto flex justify-between items-center px-14">
          {/* Text Section */}
          <div className="w-[45%] flex flex-col items-start px-5 py-8">
            <h2 className="text-4xl font-semibold text-white pb-8">
              Scan to experience Spoontoo yourself!
            </h2>
            <h6 className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type.
            </h6>
          </div>

          {/* QR Section */}
          <div className="w-[50%] relative flex justify-end items-center">
            <div className="absolute w-96 bg-white border border-black rounded-2xl drop-shadow-lg flex justify-center items-center p-5">
              <Image alt="QR-Image" src={qrImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanToExperience;
