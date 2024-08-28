"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import oneImage from "./assets/one.svg";
import twoImage from "./assets/two.svg";
import threeImage from "./assets/three.svg";

export const Navbar = () => {
  const router = useRouter();

  const handleEnterApp = () => {
    router.push("/app");
  };
  return (
    <div className="bg-transparent p-4 text-white flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="flex flex-col">
          <span className="font-bold text-6xl ml-10 mt-5 leading-tight text-white">Mesh</span>
        </div>
      </div>
      <button className="btn btn-lg bg-teal-900 text-xl mt-5 mr-10  text-white hover:bg-teal-700" onClick={handleEnterApp}>
        Enter App
      </button>
    </div>
  );
};

const Intro = () => {
  const router = useRouter();

  const handleEnterApp = () => {
    router.push("/app");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10 items-center p-20">
        <div className="h-5/6 items-center space-x-4 justify-center items-center">
          <div className="flex justify-center items-center">
          <h1 className="text-12xl text-white font-bold">Mesh</h1>
          </div>
          <div className="text-white text-4xl">Build the future of AI with Decentralised Datasets.</div>
          <div className="mt-10 flex justify-center items-center">
          <button
            className="btn btn-lg bg-teal-900 rounded-2xl text-white hover:bg-teal-700"
            onClick={handleEnterApp}
          >
            Enter App
          </button>
        </div>
        </div>
        
        <div className="flex flex-row gap-8 cursor-pointer text-lg">
        <div className="flex flex-col items-center">
          <Image src={oneImage} alt="Dataset Image 1" width={350} height={350} className="object-cover mb-4" />
          <p className="text-white font-semibold text-4xl text-center">Create, modify and explore wide range of datasets on-chain</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={twoImage} alt="Dataset Image 2" width={350} height={350} className="object-cover mb-4" />
          <p className="text-white font-semibold text-4xl text-center">Share valuable datasets to train AI for better future</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={threeImage} alt="Dataset Image 3" width={350} height={350} className="object-cover mb-4" />
          <p className="text-white font-semibold text-4xl text-center">Create data economy & prevent the misuse of data</p>
        </div>
      </div>

      </div>
    </>
  );
};

export default Intro;
