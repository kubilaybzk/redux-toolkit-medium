"use client";
import React from "react";
import { useSelector } from "react-redux";
import { decrement, increment } from "../Redux/features/counter/counterSlice";
import Button from "./Button";
export default function Counter() {
  const count = useSelector((state) => state.Mycounter.value);
  return (
    <div className="custom-number-input h-22 w-64">
      <label className="w-full text-gray-700 text-sm font-semibold">
        Counter Input
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <Button Text={"-"} func={decrement} />
        <span className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none">
          {count}
        </span>
        <Button Text={"+"} func={increment} />
      </div>
    </div>
  );
}
